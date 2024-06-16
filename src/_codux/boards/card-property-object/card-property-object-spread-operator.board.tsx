import { createBoard } from '@wixc3/react-board';
import {
    CardPropertyObject,
    type CardProps,
} from '../../../components/card-property-object/card-property-object';
import { Description } from '../../../data/description/description';

const card: CardProps = {
    title: 'Codux',
    year: 2024,
    description: new Description('Codux', 'Wix', 5),
    date: new Date(),
    version: 'beta',
    onClick: () => {
        alert('clicked');
    },
};

export default createBoard({
    name: 'Card Property Object - Spread operator',
    Board: () => <CardPropertyObject {...card} />,
    isSnippet: true,
});
