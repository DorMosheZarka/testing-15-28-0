export class Description {
    name: string;
    companyName: string;
    since?: number;

    constructor(name: string, companyName: string, since: number) {
        this.name = name;
        this.companyName = companyName;
        this.since = since;
    }

    getPerson() {
        return `${this.name} ${this.companyName} ${this.since}`;
    }
}
