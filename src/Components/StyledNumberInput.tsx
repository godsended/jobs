import React from "react";
import {NumberInput, Title} from "@mantine/core";

interface StyledNumberInputData {
    placeholder?: string;
    label?: React.ReactNode;
    value?: number | "";
    onChange?: React.Dispatch<number | "">;
    min?: number;
    max?: number;
    elemType?: string;
}

function StyledNumberInput(data: StyledNumberInputData) {
    return(
        <NumberInput
            data-elem={data.elemType}
            placeholder={data.placeholder}
            label={data.label}
            value={data.value}
            onChange={data.onChange}
            min={data.min}
            max={data.max}
            step={1000}
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