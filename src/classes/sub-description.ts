import { Description } from './description';

export class SubDescription extends Description{
    subDescription;

    constructor(subDescription: string, name: string, companyName: string, since?: number) {
        super(name, companyName, since)
        this.subDescription = subDescription;
    }

    getPerson() {
        return `${this.name} ${this.companyName} ${this.since}`;
    }
}
