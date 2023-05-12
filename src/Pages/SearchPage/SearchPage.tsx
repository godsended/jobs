import React from "react";
import Filter from "../../Components/Filter";
import {Container, Flex} from "@mantine/core";
import VacancySearch from "../../Components/VacancySearch/VacancySearch";
import VacanciesList from "../../Components/VacanciesList/VacanciesList";

function SearchPage() {
    return(
        <Flex>
            <Filter/>
            <Container>
                <VacancySearch/>
                <VacanciesList/>
            </Container>
        </Flex>
    );
}

export default SearchPage;