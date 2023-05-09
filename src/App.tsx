import React from 'react';
import './App.css';
import Auth from "./Components/Auth/Auth";
import SearchPage from "./Pages/SearchPage/SearchPage";
import {AppShell, Center, Container, Header} from "@mantine/core";
import HeaderContent from "./Components/HeaderContent/HeaderContent";

function App() {
    return (
        <AppShell
            header={<Header height={84}>{
                <Container px={"xs"} m={"auto"} h={"inherit"}>
                    <Center h={"inherit"}>
                        <HeaderContent/>
                    </Center>
                    <img className={"header-logo"} srcSet={"logo.png"} alt={"Jobored"}/>
                </Container>
            }</Header>}>
            <Auth/>
            <Container px={"xs"}>
                <SearchPage/>
            </Container>
        </AppShell>
    );
}

export default App;
