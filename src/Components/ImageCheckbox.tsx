import React from "react";
import {Box, Image} from "@mantine/core";

interface ImageCheckboxData {
    setValue?: React.Dispatch<boolean>;
    value?: boolean;
    uncheckedSrc: string;
    checkedSrc: string;
    dataElem?: string;
}

function ImageCheckbox(data: ImageCheckboxData) {
    const calcSrc = () => data.value ? data.checkedSrc : data.uncheckedSrc;
    const onClick = () => data.setValue?.(!data.value);

    return(
        <Box>
            <Image data-elem={data.dataElem} onClick={onClick} src={calcSrc()}/>
        </Box>
    )
}

export default ImageCheckbox;