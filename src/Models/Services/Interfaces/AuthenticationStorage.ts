interface AuthenticationStorage {
    getLogin(): string;
    getPassword(): string;
    getClientId(): string;
    getClientSecret(): string;
    getHr(): string;
    getSecretKey(): string;
}

export default AuthenticationStorage;