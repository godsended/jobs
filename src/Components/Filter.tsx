import React, {useState} from "react";
import {Box, Button, Flex, NumberInput, Select, Space, Text, Title} from "@mantine/core";
import {IconChevronDown} from "@tabler/icons-react";
import IndustryFetchLoader from "./IndustryFetchLoader";
import Industry from "../Models/Industry";
import ResetFiltersButton from "./ResetFiltersButton";
import FromToNumberInput from "./FromToNumberInput";

interface FilterData {
    from?: number | "";
    to?: number | "";
    industryKey?: number;
    setFrom?: React.Dispatch<number | "">;
    setTo?: React.Dispatch<number | "">;
    setIndustryKey?: React.Dispatch<number>;
    onConfirm?: () => void;
}

function Filter(data: FilterData) {
    let [industries, setIndustries] = useState(new Array<Industry>());

    function clearData() {
        data.setIndustryKey?.(-1)
        data.setFrom?.("")
        data.setTo?.("")
        data.onConfirm?.();
    }

    return (
        <Box maw={"620px"} w={"315px"} h={"max-content"} bg={"white"} sx={(theme) => ({
            border: "1px solid #EAEBED",
            borderRadius: "12px",
            flexShrink: 0,
            flexGrow: 1
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
                    value={data.industryKey !== -1 ? industries.find(i => i.key === data.industryKey)!.trimmedTitle
                        : null}
                    data={industries.map((e) => e.trimmedTitle)}
                    onChange={(value) => {
                        if (!value) data.setIndustryKey?.(-1)
                        else data.setIndustryKey?.(industries.find(i => i.trimmedTitle === value)!.key)
                    }}
                    styles={{rightSection: {"pointerEvents": "none"}}}
                />
                <Space h={"lg"}/>
                <FromToNumberInput title={"Оклад"} from={data.from} to={data.to} onFromChange={data.setFrom}
                                   onToChange={data.setTo} min={0}/>
                <Space h={"lg"}/>
                <Button w={"100%"} bg={"rgba(94, 150, 252, 1)"} radius={"8px"} onClick={data.onConfirm}>
                    Применить
                </Button>
            </Box>
        </Box>
    );
}

export default Filter;