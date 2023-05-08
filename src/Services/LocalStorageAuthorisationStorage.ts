import AuthorisationStorage from "./Interfaces/AuthorisationStorage";

export default class LocalStorageAuthorisationStorage implements AuthorisationStorage {
    getTokenType(): string {
        return localStorage.getItem("tokenType") ?? "";
    }

    getAccessToken(): string {
        return localStorage.getItem("accessToken") ?? "";
    }

    getRefreshToken(): string {
        return localStorage.getItem("refreshToken") ?? "";
    }

    setAccessToken(token: string): void {
        localStorage.setItem("accessToken", token);
    }

    setRefreshToken(token: string): void {
        localStorage.setItem("refreshToken", token);
    }

    setTokenType(type: string): void {
        localStorage.setItem("tokenType", type);
    }
}