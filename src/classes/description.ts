export class Description {
    name;
    companyName;
    since;
    subDescription;

    constructor(
        name: string,
        companyName: string,
        since: number,
        subDescription?: Description,
    ) {
        this.name = name;
        this.companyName = companyName;
        this.since = since;
        this.subDescription = subDescription;
    }

    getPerson() {
        return `${this.name} ${this.companyName} ${this.since}`;
    }
}
