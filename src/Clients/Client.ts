
export class Client {
    private readonly name: number;
    private onUsedBy: null | string = null;

    constructor(name: number) {
        this.name = name;
    }

    getName(): number {
        return this.name;
    }

    getOnUsedBy(): string | null {
        return this.onUsedBy;
    }

    setOnUsedBy(value: string | null) {
        this.onUsedBy = value;
    }
}