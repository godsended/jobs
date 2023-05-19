import AuthorisationStorage from "./Interfaces/AuthorisationStorage";

export default class LocalStorageAuthorisationStorage implements AuthorisationStorage {
    private subscribers: Array<() => void> = new Array<() => void>();

    private invoke() {
        this.subscribers.forEach(f => f());
    }

    subscribe(func: () => void): void {
        this.subscribers.push(func);
    }

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
        this.invoke();
    }

    setRefreshToken(token: string): void {
        localStorage.setItem("refreshToken", token);
        this.invoke();
    }

    setTokenType(type: string): void {
        localStorage.setItem("tokenType", type);
        this.invoke();
    }
}