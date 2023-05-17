import React, {useEffect, useState} from "react";
import {authorizationStorage} from "../storages";
import DefaultHeaderedFetch from "../Services/DefaultHeaderedFetch";
import {industriesRoute} from "../apiRoutes";
import HeaderedFetch from "../Services/Interfaces/HeaderedFetch";
import Industry from "../Models/Industry";

interface IndustryFetchLoaderData {
    industries: Array<Industry>;
    setIndustries: React.Dispatch<React.SetStateAction<Industry[]>>;
}

function IndustryFetchLoader(data: IndustryFetchLoaderData) {
    let [accessToken, setAccessToken] = useState(authorizationStorage.getAccessToken());
    authorizationStorage.subscribe(() => {
        setAccessToken(authorizationStorage.getAccessToken());
    })
    const headeredFetchObject: HeaderedFetch = new DefaultHeaderedFetch();
    const fetch = headeredFetchObject.fetch;
    useEffect(() => {
        if (accessToken === "") {
            return () => {
                data.setIndustries([]);
            }
        }
        const makeRequest = async () => {
            let newIndustries = new Array<Industry>();
            let responseData = await (await fetch(industriesRoute, {}, {})).json();
            responseData.forEach((el: any) => {
                let ind = new Industry();
                ind.key = el.key;
                ind.title = el.title;
                ind.trimmedTitle = el.title_trimmed;
                newIndustries.push(ind);
            })
            data.setIndustries(newIndustries);
        }
        makeRequest().catch(console.error);

        return () => {
            data.setIndustries([]);
        }
    }, [accessToken, fetch])
    return (
        <>
        </>
    )
}

export default IndustryFetchLoader;