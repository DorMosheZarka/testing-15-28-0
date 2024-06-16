import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

const cardData = {
    title: 'Codux',
    date: '2024',
    description: 'Codux is a nice software',
    extraDescription: '1B users',
    onClick: () => {
        alert('clicked');
    },
};

export default createBoard({
    name: 'Card Destructuring - Board Spread operator',
    Board: () => <Card {...cardData} />,
    isSnippet: true,
});
