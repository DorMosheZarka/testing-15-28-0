import { Description } from '../classes/description';

export type Version = 'alpha' | 'beta';

export interface Card {
    id: number;
    title: string;
    year: number;
    description: Description;
    version: Version;
    date: Date;
}

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
