import AuthorisationStorage from "./Models/Services/Interfaces/AuthorisationStorage";
import LocalStorageAuthorisationStorage from "./Models/Services/LocalStorageAuthorisationStorage";
import AuthenticationStorage from "./Models/Services/Interfaces/AuthenticationStorage";
import EnvironmentAuthenticationStorage from "./Models/Services/EnvironmentAuthenticationStorage";
import FeaturedStorage from "./Models/Services/Interfaces/FeaturedStorage";
import LocalStorageFeaturedStorage from "./Models/Services/LocalStorageFeaturedStorage";

const authorizationStorage: AuthorisationStorage = new LocalStorageAuthorisationStorage();
const authenticationStorage: AuthenticationStorage = new EnvironmentAuthenticationStorage();
const featuredVacanciesStorage: FeaturedStorage = new LocalStorageFeaturedStorage();

export {authorizationStorage, authenticationStorage, featuredVacanciesStorage}