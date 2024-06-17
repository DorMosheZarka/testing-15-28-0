export class Node {
    value;

    constructor(value: string[] | number[]) {
        this.value = value;
    }

    getValue() {
        return this.value[0];
    }
}
