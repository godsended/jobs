import FeaturedStorage from "./Interfaces/FeaturedStorage";

const storageKey = "LocalStorageFeaturedVacanciesStorageKey";

export default class LocalStorageFeaturedStorage implements FeaturedStorage {
    private vacancies: Array<string>;
    private callbacks: Array<() => void>;

    constructor() {
        let vacanciesString = localStorage.getItem(storageKey);
        if(vacanciesString) {
            this.vacancies = JSON.parse(vacanciesString);
        } else {
            this.vacancies = [];
        }
        this.callbacks = [];
    }

    private invoke(): void {
        this.callbacks.forEach(c => c());
    }

    subscribe(callback: () => void): void {
        this.callbacks.push(callback);
    }

    clear(): void {
        this.vacancies = [];
        this.invoke();
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
        this.invoke();
    }

    saveChanges() {
        localStorage.setItem(storageKey, JSON.stringify(this.vacancies));
    }

    add(ids: Array<string> | string, invoke: boolean = true): void {
        if(typeof ids === "string") {
            if(this.vacancies.indexOf(ids) === -1)
                this.vacancies.push(ids);
            if(invoke)
                this.invoke();
            return;
        }

        for(let id of ids)
            this.add(id, false)
        this.invoke();
    }

    getAll(): Array<string> {
        return this.vacancies;
    }

}