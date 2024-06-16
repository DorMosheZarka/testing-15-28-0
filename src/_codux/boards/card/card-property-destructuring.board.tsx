import { createBoard } from '@wixc3/react-board';
import { Card, type CardProps } from '../../../components/card/card';

const card: CardProps = {
    title: 'title',
    year: 2024,
    description: 'Software',
    date: new Date(),
    version: 'beta',
    onClick: () => null,
};

const { title, year, description, date, version, onClick } = card;

export default createBoard({
    name: 'Card Destructuring - Board Property destructuring',
    Board: () => (
        <Card
            title={title}
            year={year}
            description={description}
            date={date}
            version={version}
            onClick={onClick}
        />
    ),
    isSnippet: true,
});
