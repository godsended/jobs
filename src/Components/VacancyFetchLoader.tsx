import React, {useEffect, useState} from "react";
import {authorizationStorage, vacanciesStorage} from "../storages";
import HeaderedFetch from "../Models/Services/Interfaces/HeaderedFetch";
import DefaultHeaderedFetch from "../Models/Services/DefaultHeaderedFetch";
import {vacancyRoute} from "../apiRoutes";
import Vacancy from "../Models/Vacancy";

interface VacancyFetchLoaderData {
    id: string;
    setVacancy: React.Dispatch<Vacancy>;
    setIsLoading: React.Dispatch<boolean>
}

function VacancyFetchLoader(data: VacancyFetchLoaderData) {
    let [accessToken, setAccessToken] = useState(authorizationStorage.getAccessToken());
    authorizationStorage.subscribe(() => {
        setAccessToken(authorizationStorage.getAccessToken());
    })
    const headeredFetchObject: HeaderedFetch = new DefaultHeaderedFetch();
    const fetch = headeredFetchObject.fetch;

    useEffect(() => {
        if (accessToken === "") {
            return () => data.setVacancy(new Vacancy());
        }

        const makeRequest = async () => {
            let storedVacancy = vacanciesStorage.get(data.id);
            if(storedVacancy) {
                data.setVacancy(storedVacancy);
                data.setIsLoading(false);
                return;
            }

            let responseData = await (await fetch(vacancyRoute + data.id, {}, {})).json();
            let vacancy: Vacancy = {
                vacancyId: Number.parseInt(data.id) ?? responseData.id,
                town: responseData.town.title,
                catalogueTitle: responseData.profession,
                currency: responseData.currency,
                paymentFrom: responseData["payment_from"],
                paymentTo: responseData["payment_to"],
                vacancyDescription: responseData.vacancyRichText,
                firmName: responseData["firm_name"],
                typeOfWork: responseData["type_of_work"].title
            }

            data.setVacancy(vacancy);
            data.setIsLoading(false);
            vacanciesStorage.add(vacancy);
        }

        data.setIsLoading(true);
        makeRequest().catch(console.error);

        return () => data.setVacancy(new Vacancy());
        // eslint-disable-next-line
    }, [accessToken])

    return (
        <></>
    )
}

export default VacancyFetchLoader;