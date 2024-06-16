import { createBoard } from '@wixc3/react-board';
import { Card, type CardProps } from '../../../components/card/card';

const card: CardProps = {
    title: 'Codux',
    year: 2024,
    description: 'Software',
    date: new Date(),
    version: 'beta',
    onClick: () => {
        alert('clicked');
    },
};

export default createBoard({
    name: 'Card Destructuring - Spread operator',
    Board: () => <Card {...card} />,
    isSnippet: true,
});
