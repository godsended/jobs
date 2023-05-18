import AuthorisationStorage from "./Models/Services/Interfaces/AuthorisationStorage";
import LocalStorageAuthorisationStorage from "./Models/Services/LocalStorageAuthorisationStorage";
import AuthenticationStorage from "./Models/Services/Interfaces/AuthenticationStorage";
import EnvironmentAuthenticationStorage from "./Models/Services/EnvironmentAuthenticationStorage";
import FeaturedStorage from "./Models/Services/Interfaces/FeaturedStorage";
import LocalStorageFeaturedStorage from "./Models/Services/LocalStorageFeaturedStorage";
import VacanciesStorage from "./Models/Services/Interfaces/VacanciesStorage";
import MemoVacanciesStorage from "./Models/Services/MemoVacanciesStorage";

const authorizationStorage: AuthorisationStorage = new LocalStorageAuthorisationStorage();
const authenticationStorage: AuthenticationStorage = new EnvironmentAuthenticationStorage();
const featuredVacanciesStorage: FeaturedStorage = new LocalStorageFeaturedStorage();
const vacanciesStorage: VacanciesStorage = new MemoVacanciesStorage();

export {authorizationStorage, authenticationStorage, featuredVacanciesStorage, vacanciesStorage}