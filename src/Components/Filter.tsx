import React, {useState} from "react";
import {Box, Button, Flex, NumberInput, Select, Space, Text, Title} from "@mantine/core";
import {IconChevronDown} from "@tabler/icons-react";
import IndustryFetchLoader from "./IndustryFetchLoader";
import Industry from "../Models/Industry";
import ResetFiltersButton from "./ResetFiltersButton";
import FromToNumberInput from "./FromToNumberInput";

function Filter() {
    let [industries, setIndustries] = useState(new Array<Industry>());
    let [from, setFrom]
        = useState<number | "">("");
    let [to, setTo]
        = useState<number | "">("");
    let [industryKey, setIndustryKey] = useState(-1);

    function clearData() {
        setIndustryKey(-1)
        setFrom("")
        setTo("")
    }

    return (
        <Box w={"min(315px, 100%)"} bg={"white"} sx={(theme) => ({
            borderRadius: "12px"
        })}>
            <Box p={"lg"}>
                <IndustryFetchLoader setIndustries={setIndustries} industries={industries}/>
                <Flex justify={"space-between"}>
                    <Title inline size={"20px"}>Фильтры</Title>
                    <ResetFiltersButton onClick={clearData}>
                        Сбросить всё
                    </ResetFiltersButton>
                </Flex>
                <Space h={"xl"}/>
                <Select
                    label={<Title order={5}>Отрасль</Title>}
                    radius="8px"
                    rightSection={<IconChevronDown color={"rgba(172, 173, 185, 1)"}/>}
                    placeholder="Выберете отрасль"
                    value={industryKey !== -1 ? industries.find(i => i.key === industryKey)!.trimmedTitle : null}
                    data={industries.map((e) => e.trimmedTitle)}
                    onChange={(value) => {
                        if (!value) setIndustryKey(-1)
                        else setIndustryKey(industries.find(i => i.trimmedTitle === value)!.key)
                    }}
                    styles={{rightSection: {"pointerEvents": "none"}}}
                />
                <Space h={"lg"}/>
                <FromToNumberInput title={"Оклад"} from={from} to={to} onFromChange={setFrom} onToChange={setTo} min={0}/>
                <Space h={"lg"}/>
                <Button w={"100%"} bg={"rgba(94, 150, 252, 1)"} radius={"8px"}>
                    Применить
                </Button>
            </Box>
        </Box>
    );
}

export default Filter;