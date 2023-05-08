interface AuthorisationStorage {
    getRefreshToken(): string;
    getAccessToken(): string;
    getTokenType(): string;
    setRefreshToken(token: string): void;
    setAccessToken(token: string): void;
    setTokenType(type: string): void;
}

export default AuthorisationStorage;