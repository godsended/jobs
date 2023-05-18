interface FeaturedStorage {
    remove(id: string): void;
    clear(): void;
    has(id: string): boolean;
    getAll(): Array<string>;
    add(id: string): void;
    add(ids: Array<string>): void;
    subscribe(callback: () => void): void;
    saveChanges(): void;
}

export default FeaturedStorage;