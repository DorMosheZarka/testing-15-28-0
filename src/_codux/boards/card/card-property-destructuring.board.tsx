import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

const card = {
    title: 'title',
    date: 'date',
    description: 'description',
    extraDescription: 'extraDescription',
};

export default createBoard({
    name: 'Card - Property Destructuring',
    Board: () => (
        <Card
            title={card.title}
            date={card.date}
            description={card.description}
            extraDescription={card.extraDescription}
        />
    ),
    isSnippet: true,
});
