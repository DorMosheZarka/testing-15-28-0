import { Description } from '../classes/description';
import { Node } from '../classes/node';

export interface BinTree {
    value: Node;
    left?: BinTree;
    right?: BinTree;
}

export interface Card {
    id: number;
    title: string;
    year: number;
    description: Description;
    version: Version;
    date: Date;
}

export type Version = 'alpha' | 'beta';

export const cards: Card[] = [
    {
        id: 1,
        title: 'Codux',
        year: 2024,
        description: new Description('Codux', 'Wix', 5),
        version: 'beta',
        date: new Date(),
    },
];

export const newTitle = 'new title';

export const binTreeData: BinTree = {
    value: new Node([1]),
    left: {
        value: new Node([2]),
        left: {
            value: new Node([4]),
        },
        right: {
            value: new Node([5]),
        },
    },
    right: {
        value: new Node([3]),
        left: {
            value: new Node([6]),
        },
        right: {
            value: new Node([7]),
        },
    },
};

export const importedString = 'cancel';
