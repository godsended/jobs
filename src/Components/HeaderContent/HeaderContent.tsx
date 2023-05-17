import React from "react";
import {Center, Flex, Image, Space, Text} from "@mantine/core";
import "./HeaderContent.css"
import {NavLink} from "react-router-dom";

function HeaderContent() {
    return (
        <Flex gap={"xl"}
              justify={{sm: "space-between"}}>
            <Center><NavLink to={"/"}>Поиск вакансий</NavLink></Center>
            <Center>Избранное</Center>
        </Flex>
    )
}

export default HeaderContent;