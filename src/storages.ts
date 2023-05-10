import AuthorisationStorage from "./Services/Interfaces/AuthorisationStorage";
import LocalStorageAuthorisationStorage from "./Services/LocalStorageAuthorisationStorage";
import AuthenticationStorage from "./Services/Interfaces/AuthenticationStorage";
import EnvironmentAuthenticationStorage from "./Services/EnvironmentAuthenticationStorage";

const authorizationStorage: AuthorisationStorage = new LocalStorageAuthorisationStorage();
const authenticationStorage: AuthenticationStorage = new EnvironmentAuthenticationStorage();

export {authorizationStorage, authenticationStorage}