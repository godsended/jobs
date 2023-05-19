import React, {useState} from "react";
import {Anchor, Center, Flex, Image, Skeleton, Stack, Text, Title} from "@mantine/core";
import PaymentText from "./PaymentText";
import {NavLink} from "react-router-dom";
import ImageCheckbox from "./ImageCheckbox";
import Vacancy from "../Models/Vacancy";
import {featuredVacanciesStorage} from "../storages";

interface VacancyItemData {
    vacancyId?: number;
    firmName?: string | null;
    town?: string | null;
    catalogueTitle?: string | null;
    typeOfWork?: string | null;
    paymentTo?: number | null;
    paymentFrom?: number | null;
    currency?: string | null;
    vacancyDescription?: string | null;
    isLoading?: boolean;
    isLink?: boolean;
}

function VacancyItem(data: VacancyItemData) {
    const [featured, setFeatured] = useState(featuredVacanciesStorage.has((data.vacancyId ?? "").toString()));

    const onFeaturedToggled = (value: boolean) => {
        setFeatured(value);
        if (data.vacancyId) {
            if (value)
                featuredVacanciesStorage.add(data.vacancyId.toString());
            else featuredVacanciesStorage.remove(data.vacancyId.toString());

            featuredVacanciesStorage.saveChanges();
        }
    }

    return (
        <Stack data-elem={"vacancy-" + data.vacancyId}
            spacing={"md"} bg={"white"} p={"1.3em"} sx={(theme) => ({
            border: "1px solid #EAEBED",
            borderRadius: "12px"
        })}>
            {data.isLoading ?
                (<>
                    <Skeleton height={"20px"} radius={0}/>
                    <Skeleton height={"1em"} radius={0}/>
                    <Skeleton width={"30%"} height={"1em"} radius={0}/>
                </>) :
                <>
                    <Flex justify={"space-between"} h={"20px"}>
                        <Title size={"20px"} inline sx={_ => ({
                            overflow: "hidden"
                        })}>
                            {
                                !data.isLink
                                    ? data.catalogueTitle :
                                    <Anchor inline underline={false} color={"rgba(94, 150, 252, 1)"}>
                                        <NavLink to={"/vacancy/" + data.vacancyId}
                                                 style={{color: 'inherit', textDecoration: 'inherit'}}>
                                            {data.catalogueTitle}
                                        </NavLink>
                                    </Anchor>
                            }
                        </Title>
                        <ImageCheckbox dataElem={"vacancy-" + data.vacancyId?.toString() + "-shortlist-button"}
                                       uncheckedSrc={"/star.png"} checkedSrc={"/star_filled.png"}
                                       value={featured}
                                       setValue={onFeaturedToggled}/>
                    </Flex>
                    <Flex gap={"xs"}>
                        <PaymentText from={data.paymentFrom} to={data.paymentTo} currency={data.currency}/>
                        <Text inline fw={700}>•</Text>
                        <Text inline>{data.typeOfWork}</Text>
                    </Flex>
                    <Flex gap={"xs"}>
                        <Center><Image height={"1em"} width={"auto"} src={"/loc.png"}/></Center>
                        <Text inline>{data.town}</Text>
                    </Flex>
                </>
            }
        </Stack>
    )
}

export default VacancyItem;