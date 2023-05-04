import AuthorisationStorage from "./Interfaces/AuthorisationStorage";

class LocalStorageAuthorisationStorage implements AuthorisationStorage {
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

}