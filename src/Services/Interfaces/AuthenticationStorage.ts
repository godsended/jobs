interface AuthenticationStorage {
    getLogin(): string;
    getPassword(): string;
    getClientId(): string;
    getClientSecret(): string;
    getHr(): string;
}

export default AuthenticationStorage;