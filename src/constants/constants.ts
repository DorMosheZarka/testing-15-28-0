export type Version = 'alpha' | 'beta';

export interface Card {
    id: number;
    title: string;
    year: number;
    description: string;
    version: Version;
    date: Date;
}

export const cards: Card[] = [
    {
        id: 1,
        title: 'Codux',
        year: 2024,
        description: 'software',
        version: 'beta',
        date: new Date(),
    },
];

export const newTitle = 'new title';
