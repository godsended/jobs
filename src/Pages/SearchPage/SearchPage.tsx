import React, {useEffect, useState} from "react";
import Filter from "../../Components/Filter";
import {Center, Flex, Pagination, Stack} from "@mantine/core";
import VacancySearch from "../../Components/VacancySearch";
import VacanciesList from "../../Components/VacanciesList";

function SearchPage() {
    let [page, setPage] = useState(1);
    let [total, setTotal] = useState(0);
    let [paymentFrom, setPaymentFrom] = useState<"" | number>("");
    let [paymentTo, setPaymentTo] = useState<"" | number>("");
    let [industryKey, setIndustryKey] = useState<number>(-1);
    let [filtersVersion, setFiltersVersion] = useState(0);
    let [keyword, setKeyword] = useState<string | undefined>("");

    let onFiltersConfirm = () => {
        setFiltersVersion(filtersVersion + 1);
        setPage(1);
    }

    let getTotalPages = () => Math.ceil(Math.min(total / 4, 125));

    return (
        <Flex justify={"center"} gap={"md"} wrap={"wrap"}>
            <Filter from={paymentFrom} to={paymentTo} industryKey={industryKey}
                    setFrom={setPaymentFrom} setTo={setPaymentTo} setIndustryKey={setIndustryKey}
                    onConfirm={onFiltersConfirm}/>
            <Stack maw={"620px"} sx={(theme) => ({
                flexGrow: 100
            })}>
                <VacancySearch keyword={keyword} setKeyword={setKeyword} onSubmit={onFiltersConfirm}/>
                <VacanciesList setTotal={setTotal} page={page - 1} paymentFrom={paymentFrom} paymentTo={paymentTo}
                               industryKey={industryKey} keyword={keyword} filtersVersion={filtersVersion}/>
                <Center>
                    <Pagination total={getTotalPages()} onChange={setPage} value={page}/>
                </Center>
            </Stack>
        </Flex>
    );
}

export default SearchPage;