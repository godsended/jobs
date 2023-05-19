import React from "react";
import VacancyItem from "./VacancyItem";
import {Center, Stack} from "@mantine/core";
import Vacancy from "../Models/Vacancy";
import NotFoundView from "./NotFoundView";

interface VacanciesListData {
    vacancies: Array<Vacancy>;
    isLoading?: boolean;
}

function VacanciesList(data: VacanciesListData) {
    let stackData: React.ReactNode = "";
    if (data.isLoading) {
        stackData = ["vac_pre_0", "vac_pre_1", "vac_pre_2", "vac_pre_3"].map(id =>
            <VacancyItem key={id} isLoading={true}/>
        )
    } else if (data.vacancies.length === 0) {
        stackData = <Center p={"xl"}>
            <NotFoundView/>
        </Center>
    } else {
        stackData = data.vacancies.map(v =>
            <VacancyItem key={v.vacancyId} catalogueTitle={v.catalogueTitle} vacancyId={v.vacancyId}
                         vacancyDescription={v.vacancyDescription} currency={v.currency} firmName={v.firmName}
                         paymentFrom={v.paymentFrom} paymentTo={v.paymentTo} town={v.town}
                         typeOfWork={v.typeOfWork} isLink={true}/>
        )
    }

    return (
        <Stack w={"100%"}>
            {stackData}
        </Stack>
    )
}

export default VacanciesList;