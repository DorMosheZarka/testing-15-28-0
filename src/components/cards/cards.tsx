import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';
import { Description } from '../../classes/description';

const companyDescription = new Description('Codux', 'Wix', 5);

const title = 'Codux';
const year = 2024;
const description = companyDescription;
const date = new Date(2021, 5, 16);
const version: 'alpha' | 'beta' = 'beta';
const onClick = () => null;
const imgUrl: string =
    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg';

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
        imgUrl: imgUrl,
    },
    {
        id: 1,
        title: title,
        year: year,
        description: description,
        date: date,
        version: version,
        onClick: onClick,
        imgUrl: imgUrl,
    },
    {
        id: 2,
        title: title,
        year: year,
        description: description,
        date: date,
        version: version,
        onClick: onClick,
        imgUrl: imgUrl,
    },
];

export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames('ui', 'link', 'cards', styles.size)}>
            {cardsData.map((cardsData) => (
                <Card key={cardsData.id} {...cardsData} />
            ))}
        </div>
    );
};
