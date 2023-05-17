import React from "react";
import {Anchor, Center, Flex, Image, Space, Text} from "@mantine/core";
import "./HeaderContent.css"
import {NavLink, useLocation} from "react-router-dom";

function HeaderContent() {
    let location = useLocation();
    return (
        <Flex gap={"xl"}
              justify={{sm: "space-between"}}>
            <Center>
                <Anchor underline={false} color={location.pathname === "/" ? "blue" : "black"}>
                    <NavLink to={"/"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                        Поиск вакансий
                    </NavLink>
                </Anchor>
            </Center>
            <Anchor underline={false} color={location.pathname === "/featured" ? "blue" : "black"}>
                <NavLink to={"/featured"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                    Избранное
                </NavLink>
            </Anchor>
        </Flex>
    )
}

export default HeaderContent;