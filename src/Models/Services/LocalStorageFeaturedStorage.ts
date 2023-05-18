import FeaturedStorage from "./Interfaces/FeaturedStorage";

const storageKey = "LocalStorageFeaturedVacanciesStorageKey";

export default class LocalStorageFeaturedStorage implements FeaturedStorage {
    private vacancies: Array<string>;

    constructor() {
        let vacanciesString = localStorage.getItem(storageKey);
        if(vacanciesString) {
            this.vacancies = JSON.parse(vacanciesString);
        } else {
            this.vacancies = [];
        }
    }

    clear(): void {
        this.vacancies = [];
    }

    has(id: string): boolean {
        let ind = this.vacancies.indexOf(id);
        return ind >= 0;
    }

    remove(id: string): void {
        let ind = this.vacancies.indexOf(id);
        if(ind < 0)
            return;

        delete this.vacancies[ind];
        this.vacancies = this.vacancies.filter(v => !!v);
    }

    saveChanges() {
        localStorage.setItem(storageKey, JSON.stringify(this.vacancies));
    }

    add(ids: Array<string> | string): void {
        if(typeof ids === "string") {
            if(this.vacancies.indexOf(ids) === -1)
                this.vacancies.push(ids);
            return;
        }

        for(let id of ids)
            this.add(id)
    }

    getAll(): Array<string> {
        return this.vacancies;
    }

}