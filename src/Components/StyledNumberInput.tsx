import React from "react";
import {NumberInput, Title} from "@mantine/core";

interface StyledNumberInputData {
    placeholder?: string;
    label?: React.ReactNode;
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
}

function StyledNumberInput(data: StyledNumberInputData) {
    return(
        <NumberInput
            placeholder={data.placeholder}
            label={data.label}
            value={data.value}
            onChange={data.onChange}
            min={data.min}
            max={data.max}
            radius="8px"
            styles={{
                controlUp: {
                    border: 0,
                    "flexDirection": "column",
                    "justifyContent": "end",
                    color: "rgba(172, 173, 185, 1)"
                },
                controlDown: {
                    border: 0,
                    "flexDirection": "column",
                    "justifyContent": "start",
                    color: "rgba(172, 173, 185, 1)"
                },
                rightSection: {width: "auto"}
            }}
        />
    )
}

export default StyledNumberInput;