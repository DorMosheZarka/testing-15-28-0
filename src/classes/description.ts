type Since =  number | string;

export class Description {
    name;
    companyName;
    since;

    constructor(name: string, companyName: string, since?: Since) {
        this.name = name;
        this.companyName = companyName;
        this.since = since;
    }

    getPerson() {
        return `${this.name} ${this.companyName} ${this.since}`;
    }
}
