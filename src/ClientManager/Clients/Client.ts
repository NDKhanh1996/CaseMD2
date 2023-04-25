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

    login(name: string) {
        this.onUsedBy = name;
    }

    logoff() {
        this.onUsedBy = null;
    }
}