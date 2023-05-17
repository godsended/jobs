import AuthorisationStorage from "./Models/Services/Interfaces/AuthorisationStorage";
import LocalStorageAuthorisationStorage from "./Models/Services/LocalStorageAuthorisationStorage";
import AuthenticationStorage from "./Models/Services/Interfaces/AuthenticationStorage";
import EnvironmentAuthenticationStorage from "./Models/Services/EnvironmentAuthenticationStorage";

const authorizationStorage: AuthorisationStorage = new LocalStorageAuthorisationStorage();
const authenticationStorage: AuthenticationStorage = new EnvironmentAuthenticationStorage();

export {authorizationStorage, authenticationStorage}