import React, {useEffect, useState} from "react";
import {authorizationStorage, vacanciesStorage} from "../storages";
import HeaderedFetch from "../Models/Services/Interfaces/HeaderedFetch";
import DefaultHeaderedFetch from "../Models/Services/DefaultHeaderedFetch";
import {vacanciesRoute} from "../apiRoutes";
import Vacancy from "../Models/Vacancy";
import vacancy from "../Models/Vacancy";

interface VacanciesFetchLoaderData {
    setTotal?: React.Dispatch<number>;
    page?: number;
    paymentFrom?: number | "";
    paymentTo?: number | "";
    industryKey?: number;
    setVacancies?: React.Dispatch<Array<Vacancy>>;
    filtersVersion?: number;
    keyword?: string;
    ids?: Array<string>;
    setIsLoading?: React.Dispatch<boolean>;
}

function VacanciesFetchLoader(data: VacanciesFetchLoaderData) {
    let [accessToken, setAccessToken] = useState(authorizationStorage.getAccessToken());
    let requestVersion = 0;
    authorizationStorage.subscribe(() => {
        setAccessToken(authorizationStorage.getAccessToken());
    })
    const headeredFetchObject: HeaderedFetch = new DefaultHeaderedFetch();
    const fetch = headeredFetchObject.fetch;
    useEffect(() => {
        if(accessToken === "") {
            return () => data.setVacancies?.([]);
        }

        let query = {
            published: 1,
            count: 4,
            keyword: data.keyword ?? "",
            page: data.page ?? "",
            ids: data.ids ?? "",
            "payment_from": data.paymentFrom ?? "",
            "payment_to": data.paymentTo ?? "",
            catalogues: data.industryKey === -1 ? "" : data.industryKey
        }

        const makeRequest = async () => {
            requestVersion += 1;
            const currVersion = requestVersion;
            let responseData = await (await fetch(vacanciesRoute, query, {})).json();
            if(requestVersion !== currVersion)
                return;

            data.setTotal?.(responseData.total);
            let vacancies: Array<Vacancy> = [];
            responseData.objects.forEach((o: any) => {
                let vacancy = new Vacancy();
                vacancy.vacancyId = o.id;
                vacancy.town = o.town.title;
                vacancy.catalogueTitle = o.profession;
                vacancy.currency = o.currency;
                vacancy.paymentFrom = o["payment_from"];
                vacancy.paymentTo = o["payment_to"];
                vacancy.vacancyDescription = o.vacancyRichText;
                vacancy.firmName = o["firm_name"];
                vacancy.typeOfWork = o["type_of_work"].title;
                vacancies.push(vacancy);
            })
            data.setVacancies?.(vacancies);
            data.setIsLoading?.(false);
            vacancies.forEach(v => vacanciesStorage.add(v));
        }

        data.setIsLoading?.(true);
        makeRequest().catch(console.error);

        return () => data.setVacancies?.([]);
    }, [accessToken, fetch, data.page, data.filtersVersion])

    return(
        <></>
    )
}

export default VacanciesFetchLoader;