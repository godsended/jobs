import React, {useEffect, useState} from "react";
import {Center, Pagination, Stack} from "@mantine/core";
import Vacancy from "../Models/Vacancy";
import VacanciesList from "../Components/VacanciesList";
import {featuredVacanciesStorage} from "../storages";
import FeaturedVacanciesFetchLoader from "../Components/FeaturedVacanciesFetchLoader";

function FeaturedPage() {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(featuredVacanciesStorage.getAll().length);
    const [vacancies, setVacancies] = useState<Array<Vacancy>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ids, setIds] = useState<Array<string>>([]);

    useEffect(() => {
        setIds(featuredVacanciesStorage.getAll().slice(Math.min((page-1) * 4, total),
            Math.min(page * 4, total)));
    }, [page])

    const getTotalPages = () => Math.ceil(Math.min(total / 4, 125));

    return (
        <>
            <FeaturedVacanciesFetchLoader setVacancies={setVacancies} setIsLoading={setIsLoading} ids={ids}/>
            <Stack>
                <VacanciesList vacancies={vacancies} isLoading={isLoading}/>
                <Center>
                    <Pagination total={getTotalPages()} onChange={setPage} value={page}/>
                </Center>
            </Stack>
        </>
    )
}

export default FeaturedPage;