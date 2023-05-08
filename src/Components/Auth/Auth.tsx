import React, {useEffect} from "react";
import DefaultHeaderedFetch from "../../Services/DefaultHeaderedFetch";
import HeaderedFetch from "../../Services/Interfaces/HeaderedFetch";
import {passwordAuth} from "../../apiRoutes";
import {authenticationStorage, authorisationStorage} from "../../storages";

function Auth() {
    const fetchObject: HeaderedFetch = new DefaultHeaderedFetch()
    const headeredFetch = fetchObject.fetch
    const query = {
        login: authenticationStorage.getLogin(),
        password: authenticationStorage.getPassword(),
        client_id: authenticationStorage.getClientId(),
        client_secret: authenticationStorage.getClientSecret(),
        hr: "0"
    }
    headeredFetch(passwordAuth, query, {
        method: "GET"
    }).then(response => {
        return response.json()
    }).then(data => {
        authorisationStorage.setAccessToken(data["access_token"]);
        authorisationStorage.setRefreshToken(data["refresh_token"])
        authorisationStorage.setTokenType(data["token_type"])
    })
    return (
        <>
        </>
    )
}

export default Auth;