import React, {useEffect} from "react";
import Vacancy from "../Models/Vacancy";
import DefaultHeaderedFetch from "../Models/Services/DefaultHeaderedFetch";
import {vacancyRoute} from "../apiRoutes";
import {vacanciesStorage} from "../storages";

interface FeaturedVacanciesFetchLoaderData {
    setVacancies?: React.Dispatch<Array<Vacancy>>;
    setIsLoading?: React.Dispatch<boolean>;
    ids?: Array<string>;
}

function FeaturedVacanciesFetchLoader(data: FeaturedVacanciesFetchLoaderData) {
    const fetch = new DefaultHeaderedFetch().fetch;

    useEffect(() => {
        if (!data.ids) {
            return;
        }

        let vacancies = new Array<Vacancy>();
        data.setIsLoading?.(true);
        let storedVacancies: Array<Vacancy> = data.ids.map(id => vacanciesStorage.get(id)!).filter(v => !!v);
        let unstoredVacanciesIds = data.ids.filter(id => storedVacancies.findIndex(v => v?.vacancyId.toString() === id)
            < 0)
        let requests = unstoredVacanciesIds.map(id => fetch(vacancyRoute + id, {}, {}).then(r => r.json()));
        Promise.all(requests).then(values => {
            values.forEach(value => {
                vacancies.push({
                    vacancyId: value.id,
                    town: value.town.title,
                    catalogueTitle: value.profession,
                    currency: value.currency,
                    paymentFrom: value["payment_from"],
                    paymentTo: value["payment_to"],
                    vacancyDescription: value.vacancyRichText,
                    firmName: value["firm_name"],
                    typeOfWork: value["type_of_work"].title
                });
            })
            vacancies.forEach(v => vacanciesStorage.add(v));
            data.setVacancies?.(vacancies.concat(storedVacancies));
            data.setIsLoading?.(false);
        });
    }, [data.ids])
    return (
        <>
        </>
    )
}

export default FeaturedVacanciesFetchLoader;