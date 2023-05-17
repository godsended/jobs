import React, {useState} from "react";
import {Center, Container, Loader, Stack} from "@mantine/core";
import VacancyItem from "../Components/VacancyItem";
import {useParams} from "react-router";
import Vacancy from "../Models/Vacancy";
import VacancyFetchLoader from "../Components/VacancyFetchLoader";

function VacancyPage() {
    let {id} = useParams();
    let [vacancy, setVacancy] = useState(new Vacancy());
    let [isLoading, setIsLoading] = useState(true);


    return (
        <Container>
            <VacancyFetchLoader id={id!} setVacancy={setVacancy} setIsLoading={setIsLoading}/>
            <Stack>
                <VacancyItem town={vacancy.town} catalogueTitle={vacancy.catalogueTitle} typeOfWork={vacancy.typeOfWork}
                             paymentTo={vacancy.paymentTo} paymentFrom={vacancy.paymentFrom} currency={vacancy.currency}
                             isLoading={isLoading}/>
                {isLoading ?
                    <Center>
                        <Loader variant={"bars"} size={"xl"}/>
                    </Center> :
                    <Container w={"calc(100% - 2em)"} bg={"white"} px={"1em"} sx={(theme) => ({
                        border: "1px solid #EAEBED",
                        borderRadius: "12px"
                    })}>
                        <div dangerouslySetInnerHTML={{__html: vacancy.vacancyDescription ?? ""}}></div>
                    </Container>
                }
            </Stack>
        </Container>
    )
}

export default VacancyPage;