import React from 'react';
import './App.css';
import Auth from "./Components/Auth";
import SearchPage from "./Pages/SearchPage";
import {AppShell, Center, Container, Header} from "@mantine/core";
import HeaderContent from "./Components/HeaderContent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import VacancyPage from "./Pages/VacancyPage";
import FeaturedPage from "./Pages/FeaturedPage";

function App() {
    return (
        <BrowserRouter>
            <AppShell
                styles={(theme) => ({
                    main: {backgroundColor: "rgb(247, 247, 248)"}
                })}
                header={
                    <Header height={84}>
                        <Container px={"xs"} m={"auto"} h={"inherit"}>
                            <Center h={"inherit"}>
                                <HeaderContent/>
                            </Center>
                            <img className={"header-logo"} srcSet={"/logo.png"} alt={"Jobored"}/>
                        </Container>
                    </Header>
                }>
                <Auth/>
                <Routes>
                    <Route path={"/"} element={<SearchPage/>}/>
                    <Route path={"/vacancy/:id"} element={<VacancyPage/>}/>
                    <Route path={"/featured"} element={<FeaturedPage/>}/>
                </Routes>
            </AppShell>
        </BrowserRouter>
    );
}

export default App;
