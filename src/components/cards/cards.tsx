import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
}

const cardsData = [
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
    {
        title: 'Codux',
        date: '2019-2024',
        description: 'Codux is a nice software',
        extraDescription: '1B users',
    },
    {
        title: 'Fundux',
        date: '2024',
        description: 'Fundux is a nice software',
        extraDescription: '2B users',
    },
];

export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames('ui', 'link', 'cards', styles.layout)}>
            {cardsData.map((cardsData) => (
                <Card key={cardsData.title} {...cardsData} />
            ))}
        </div>
    );
};
