import React from "react";
import {Button, Image, Input} from "@mantine/core";

interface VacancySearchData {
    keyword?: string;
    setKeyword?: React.Dispatch<string | undefined>;
    onSubmit?: () => void;
}

function VacancySearch(data: VacancySearchData) {
    let button = <Button w={"6em"} bg={"rgba(94, 150, 252, 1)"} h={"2em"} radius={"8px"} onClick={data.onSubmit}>
        Поиск
    </Button>;

    let onChange: React.ChangeEventHandler<HTMLInputElement> = (value) => {
        data.setKeyword?.(value.currentTarget.value);
    }

    return (
        <Input onSubmit={data.onSubmit}
               icon={<Image height={"12.5px"} width={"12.5px"} src={"Search.png"}/>} sx={(theme) => ({
            input: {
                border: "1px solid #EAEBED",
                borderRadius: "8px",
                height: "3em"
            }
        })} rightSection={button} rightSectionWidth={"6em"} value={data.keyword} onChange={onChange}>
        </Input>
    )
}

export default VacancySearch;