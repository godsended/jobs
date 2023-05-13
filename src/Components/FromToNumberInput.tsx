import React from "react";
import {Box, Space, Title} from "@mantine/core";
import StyledNumberInput from "./StyledNumberInput";

interface FromToNumberInputData {
    title?: string;
    from?: number | "";
    to?: number | "";
    onFromChange?: React.Dispatch<number | "">;
    onToChange?: React.Dispatch<number | "">
    min?: number;
    max?: number;
}

function FromToNumberInput(data: FromToNumberInputData) {
    const labelElement = data.title ? <Title order={5}>{data.title}</Title> : undefined;

    return (
        <Box>
            <StyledNumberInput label={labelElement} placeholder={"От"} value={data.from} min={data.min} max={data.max}
                               onChange={(value) => {
                                   if(value > (data.to ?? 0))
                                       data.onToChange?.(value)
                                   data.onFromChange?.(value)
                               }}/>
            <Space h={"xs"}/>
            <StyledNumberInput placeholder={"До"} value={data.to} min={data.min} max={data.max}
                               onChange={(value) => {
                                   if(value < (data.from ?? 0))
                                       data.onFromChange?.(value)
                                   data.onToChange?.(value);
                               }}/>
        </Box>
    )
}

export default FromToNumberInput;