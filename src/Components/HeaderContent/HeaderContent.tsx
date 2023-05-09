import React from "react";
import {Center, Flex, Image, Space, Text} from "@mantine/core";
import "./HeaderContent.css"

function HeaderContent() {
    return (
        <Flex gap={"xl"}
              justify={{sm: "space-between"}}>
            <Center>Поиск вакансий</Center>
            <Center>Избранное</Center>
        </Flex>
    )
}

export default HeaderContent;