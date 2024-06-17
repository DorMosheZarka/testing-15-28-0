import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';
import { Description } from '../../data/description/description';

const companyDescription = new Description('Codux', 'Wix', 5);

const title = 'Codux';
const year = 2024;
const description = companyDescription;
const date = new Date(2021, 5, 16);
const version: 'alpha' | 'beta' = 'beta';
const onClick = () => null;

export interface CardsProps {
    className?: string;
}

const cardsData = [
    {
        id: 0,
        title: title,
        year: year,
        description: description,
        date: date,
        version: version,
        onClick: onClick,
    },
    {
        id: 1,
        title: title,
        year: year,
        description: description,
        date: date,
        version: version,
        onClick: onClick,
    },
    {
        id: 2,
        title: title,
        year: year,
        description: description,
        date: date,
        version: version,
        onClick: onClick,
    },
];

export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames('ui', 'link', 'cards', styles.layout)}>
            {cardsData.map((cardsData) => (
                <Card key={cardsData.id} {...cardsData} />
            ))}
        </div>
    );
};
