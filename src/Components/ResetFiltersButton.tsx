import React, {MouseEventHandler} from "react";
import {UnstyledButton} from "@mantine/core";
import {IconX} from "@tabler/icons-react";
import {Text, Flex} from "@mantine/core"

interface ResetFiltersButtonData {
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: string
}

function ResetFiltersButton(data: ResetFiltersButtonData) {
    return (
        <UnstyledButton onClick={data.onClick}>
            <Flex c={"dimmed"}>
                <Text inline size={"14px"}>{data.children}</Text>
                <IconX size={"1em"}/>
            </Flex>
        </UnstyledButton>
    )
}

export default ResetFiltersButton;