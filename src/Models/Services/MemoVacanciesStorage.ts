import VacanciesStorage from "./Interfaces/VacanciesStorage";
import Vacancy from "../Vacancy";

class MemoVacanciesStorage implements VacanciesStorage{
    private vacancies: Array<Vacancy>;
    constructor() {
        this.vacancies = [];
    }

    add(vacancy: Vacancy): void {
        if(vacancy.vacancyId && !this.has(vacancy.vacancyId.toString())) {
            this.vacancies.push(vacancy);
        }
    }

    has(id: string): boolean {
        return this.get(id) !== undefined;
    }

    get(id: string): Vacancy | undefined {
        return this.vacancies.find(v => v.vacancyId.toString() === id);
    }

}

export default MemoVacanciesStorage;