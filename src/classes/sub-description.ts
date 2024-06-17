import { Description } from './description';

export class SubDescription extends Description {
    subDescriptions: SubDescription[];

    constructor(
        name: string,
        companyName: string,
        since: number,
        subDescriptions: SubDescription[]
    ) {
        super(name, companyName, since);
        this.subDescriptions = subDescriptions;
    }

    addSubDescription(subDescription: SubDescription) {
        this.subDescriptions.push(subDescription);
    }

    getSubDescriptions() {
        return this.subDescriptions;
    }

    getRecursiveDescription(level = 0): string {
        const indent = ' '.repeat(level * 2);
        let description = `${indent}${this.getPerson()}\n`;
        for (const subDesc of this.subDescriptions) {
            description += subDesc.getRecursiveDescription(level + 1);
        }
        return description;
    }
}