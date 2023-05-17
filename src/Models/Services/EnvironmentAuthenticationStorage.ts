import AuthenticationStorage from "./Interfaces/AuthenticationStorage";

class EnvironmentAuthenticationStorage implements AuthenticationStorage {
    getSecretKey(): string {
        return process.env.REACT_APP_SECRET_KEY ?? "";
    }

    getClientId(): string {
        return process.env.REACT_APP_CLIENT_ID ?? "";
    }

    getClientSecret(): string {
        return process.env.REACT_APP_CLIENT_SECRET ?? "";
    }

    getHr(): string {
        return process.env.HR ?? "";
    }

    getLogin(): string {
        return process.env.REACT_APP_LOGIN ?? "";
    }

    getPassword(): string {
        return process.env.REACT_APP_PASSWORD ?? "";
    }

}

export default EnvironmentAuthenticationStorage;