import React, {useState} from "react";
import VacancyItem from "./VacancyItem";
import {Stack} from "@mantine/core";
import VacanciesFetchLoader from "./VacanciesFetchLoader";
import Vacancy from "../Models/Vacancy";

interface VacanciesListData {
    setTotal?: React.Dispatch<number>;
    page?: number;
    paymentFrom?: number | "";
    paymentTo?: number | "";
    industryKey?: number;
    filtersVersion?: number;
    keyword?: string;
}

function VacanciesList(data: VacanciesListData) {
    let [vacancies, setVacancies] = useState<Array<Vacancy>>([]);

    return (
        <Stack w={"100%"}>
            <>
                <VacanciesFetchLoader setTotal={data.setTotal} page={data.page} setVacancies={setVacancies}
                                      paymentFrom={data.paymentFrom} paymentTo={data.paymentTo}
                                      industryKey={data.industryKey} filtersVersion={data.filtersVersion}
                                      keyword={data.keyword}/>
                {vacancies.length > 0 ? vacancies.map(v =>
                        <VacancyItem key={v.vacancyId} catalogueTitle={v.catalogueTitle} vacancyId={v.vacancyId}
                                     vacancyDescription={v.vacancyDescription} currency={v.currency} firmName={v.firmName}
                                     paymentFrom={v.paymentFrom} paymentTo={v.paymentTo} town={v.town}
                                     typeOfWork={v.typeOfWork}/>
                    )
                    : ["vacancy_preloader_0", "vacancy_preloader_1", "vacancy_preloader_2", "vacancy_preloader_3"]
                        .map(id =>
                            <VacancyItem key={id} isLoading={true}/>
                        )}
            </>
        </Stack>
    )
}

export default VacanciesList;