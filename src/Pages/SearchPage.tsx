import React, {useState} from "react";
import Filter from "../Components/Filter";
import {Center, Container, Flex, Pagination, Stack} from "@mantine/core";
import VacancySearch from "../Components/VacancySearch";
import VacanciesList from "../Components/VacanciesList";
import Vacancy from "../Models/Vacancy";
import VacanciesFetchLoader from "../Components/VacanciesFetchLoader";

function SearchPage() {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [paymentFrom, setPaymentFrom] = useState<"" | number>("");
    const [paymentTo, setPaymentTo] = useState<"" | number>("");
    const [industryKey, setIndustryKey] = useState<number>(-1);
    const [filtersVersion, setFiltersVersion] = useState(0);
    const [keyword, setKeyword] = useState<string | undefined>("");
    const [vacancies, setVacancies] = useState<Array<Vacancy>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const onFiltersConfirm = () => {
        setFiltersVersion(filtersVersion + 1);
        setPage(1);
    }

    let getTotalPages = () => Math.ceil(Math.min(total / 4, 125));

    return (
        <Container px={"xs"}>
            <VacanciesFetchLoader setTotal={setTotal} page={page} setVacancies={setVacancies}
                                  paymentFrom={paymentFrom} paymentTo={paymentTo}
                                  industryKey={industryKey} filtersVersion={filtersVersion}
                                  keyword={keyword} setIsLoading={setIsLoading}/>

            <Flex justify={"center"} gap={"md"} wrap={"wrap"}>
                <Filter from={paymentFrom} to={paymentTo} industryKey={industryKey}
                        setFrom={setPaymentFrom} setTo={setPaymentTo} setIndustryKey={setIndustryKey}
                        onConfirm={onFiltersConfirm}/>

                <Stack maw={"620px"} sx={_ => ({flexGrow: 100})}>
                    <VacancySearch keyword={keyword} setKeyword={setKeyword} onSubmit={onFiltersConfirm}/>
                    <VacanciesList vacancies={vacancies} isLoading={isLoading}/>
                    <Center>
                        <Pagination total={getTotalPages()} onChange={setPage} value={page}/>
                    </Center>
                </Stack>
            </Flex>
        </Container>
    );
}

export default SearchPage;