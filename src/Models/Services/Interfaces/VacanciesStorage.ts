import Vacancy from "../../Vacancy";

interface VacanciesStorage {
    add(vacancy: Vacancy): void;
    has(id: string): boolean;
    get(id: string): Vacancy | undefined;
}

export default VacanciesStorage;