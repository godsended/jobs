import HeaderedFetch from "./Interfaces/HeaderedFetch";
import {authenticationStorage, authorizationStorage} from "../storages";

class DefaultHeaderedFetch implements HeaderedFetch {
    fetch(url: string, query: any, body: any): Promise<Response> {
        let urlObj = new URL(url);
        urlObj.search = new URLSearchParams(query).toString();
        return fetch(urlObj, {
            headers: {
                "X-Api-App-Id": authenticationStorage.getClientSecret(),
                Authorization: authorizationStorage.getTokenType() + " " + authorizationStorage.getAccessToken(),
                "Content-Type": "application/x-www-form-urlencoded",
                "x-secret-key": authenticationStorage.getSecretKey()
            },
            ...body
        });
    }

}

export default DefaultHeaderedFetch;