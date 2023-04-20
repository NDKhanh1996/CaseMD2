
export class Client {
    private readonly clientName: number;
    private onUsedBy: null | string = null;

    constructor(name: number) {
        this.clientName = name;
    }

    getName(): number {
        return this.clientName;
    }

    getOnUsedBy(): string | null {
        return this.onUsedBy;
    }

    setOnUsedBy(value: string | null) {
        this.onUsedBy = value;
    }
}