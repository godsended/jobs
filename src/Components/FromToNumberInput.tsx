import React, {useState} from "react";
import {Box, Space, Title} from "@mantine/core";
import StyledNumberInput from "./StyledNumberInput";

interface FromToNumberInputData {
    title?: string;
    value?: FromToRange;
    onChange?: (value: FromToRange) => void;
    min?: number;
    max?: number;
}

export interface FromToRange {
    from?: number;
    to?: number;
}

function FromToNumberInput(data: FromToNumberInputData) {
    const labelElement = data.title ? <Title order={5}>{data.title}</Title> : undefined;
    let [range, setRange]
        = useState(data.value ? data.value : {from: undefined, to: undefined});

    return (
        <Box>
            <StyledNumberInput label={labelElement} placeholder={"От"} value={range.from} min={data.min} max={data.max}
                               onChange={(value) => {
                                   range.from = value;
                                   if((range.from ?? 0) > (range.to ?? 0))
                                       range.to = range.from;
                                   data.onChange?.(range);
                                   setRange({from: range.from, to: range.to});
                               }}/>
            <Space h={"xs"}/>
            <StyledNumberInput placeholder={"До"} value={range.to} min={data.min} max={data.max}
                               onChange={(value) => {
                                   range.to = value;
                                   if((range.from ?? 0) > (range.to ?? 0))
                                       range.from = range.to;
                                   data.onChange?.(range)
                                   setRange({from: range.from, to: range.to});
                               }}/>
        </Box>
    )
}

export default FromToNumberInput;