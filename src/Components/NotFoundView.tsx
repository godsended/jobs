import React from "react";
import {
    Button,
    Center,
    Image,
    MantineProvider,
    MantineThemeOverride,
    Stack,
    Text,
    Title
} from "@mantine/core";
import {NavLink} from "react-router-dom";

function NotFoundView() {
    let theme: MantineThemeOverride = {};
    theme.colors = {blue: ["rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)", "rgba(222, 236, 255, 1)"]};

    return (
        <Stack>
            <Center>
                <Image width={"240px"} src={"/Frame.png"}/>
            </Center>
            <Title size={"24px"} inline order={3}>Упс, здесь еще ничего нет!</Title>
            <Center>
                <NavLink to={"/"}>
                    <MantineProvider theme={theme}>
                        <Button w={"min-content"} radius={"8px"} color={"blue"}>
                            <Text color={"rgba(59, 124, 211, 1)"}>
                                Поиск вакансий
                            </Text>
                        </Button>
                    </MantineProvider>
                </NavLink>
            </Center>
        </Stack>
    )
}

export default NotFoundView;