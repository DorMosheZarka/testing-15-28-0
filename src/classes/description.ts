export class Description {
    name;
    companyName;
    since;
    param1;
    param2;
    param3;
    param4;

    constructor(
        name: string,
        companyName: string,
        since: number,
        param1: any,
        param2: any,
        param3: any,
        param4: any,
    ) {
        this.name = name;
        this.companyName = companyName;
        this.since = since;
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.param4 = param4;
    }

    getPerson() {
        return `${this.name} ${this.companyName} ${this.since}`;
    }
}
