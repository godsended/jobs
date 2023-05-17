import React from "react";
import DefaultHeaderedFetch from "../Models/Services/DefaultHeaderedFetch";
import HeaderedFetch from "../Models/Services/Interfaces/HeaderedFetch";
import {passwordAuthRoute} from "../apiRoutes";
import {authenticationStorage, authorizationStorage} from "../storages";

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
    headeredFetch(passwordAuthRoute, query, {
        method: "GET"
    }).then(response => {
        return response.json()
    }).then(data => {
        authorizationStorage.setAccessToken(data["access_token"]);
        authorizationStorage.setRefreshToken(data["refresh_token"])
        authorizationStorage.setTokenType(data["token_type"])
    })
    return (
        <>
        </>
    )
}

export default Auth;