interface AuthorisationStorage {
    getRefreshToken(): string;
    getAccessToken(): string;
    setRefreshToken(token: string): void;
    setAccessToken(token: string): void;
}

export default AuthorisationStorage;