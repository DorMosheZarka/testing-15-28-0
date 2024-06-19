import { createBoard } from '@wixc3/react-board';
import { Card, type CardProps } from '../../../components/card/card';
import { Description } from '../../../classes/description';

const card: CardProps = {
    title: 'Codux',
    year: 2024,
    description: new Description('Codux', 'Wix', 5),
    date: new Date(),
    version: 'beta',
    onClick: () => {
        alert('clicked');
    },
    imgUrl: 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
};

export default createBoard({
    name: 'Card Destructuring - Spread operator',
    Board: () => <Card {...card} />,
    isSnippet: true,
});
