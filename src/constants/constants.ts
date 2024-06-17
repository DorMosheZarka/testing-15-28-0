import { Description } from '../classes/description';

export interface BinTree {
    value: number;
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
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 5,
        },
    },
    right: {
        value: 3,
        left: {
            value: 6,
        },
        right: {
            value: 7,
        },
    },
};
