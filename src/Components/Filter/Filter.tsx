import React, {useState} from "react";
import {Box, Button, Flex, NumberInput, Select, Title} from "@mantine/core";
import {IconX} from "@tabler/icons-react";
import IndustryFetchLoader from "../IndustryFetchLoader";
import Industry from "../../Models/Industry";

function Filter() {
    let [industries, setIndustries] = useState(new Array<Industry>())
    return (
        <Box w={"min(315px, 100%)"} bg={"white"} sx={(theme) => ({
            borderRadius: "12px"
        })}>
            <IndustryFetchLoader setIndustries={setIndustries} industries={industries}/>
            <Flex justify={"space-between"}>
                <Title order={3} className={"filter-title"}>Фильтры</Title>
                <Button rightIcon={<IconX size={"1em"}/>} variant={"subtle"} color={"gray"} type={"reset"}>
                    Сбросить всё
                </Button>
            </Flex>
            <Select
                label="Отрасль"
                radius="md"
                placeholder="Выберете отрасль"
                data={industries.map((e) => e.trimmedTitle)}
            />
            <NumberInput
                placeholder="От"
                label="Оклад"
                radius="md"
            />
            <NumberInput
                placeholder="До"
                radius="md"
            />
            <Button w={"100%"}>
                Применить
            </Button>
        </Box>
    );
}

export default Filter;