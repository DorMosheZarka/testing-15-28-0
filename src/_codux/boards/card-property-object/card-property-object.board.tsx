import { createBoard } from '@wixc3/react-board';
import { CardPropertyObject } from '../../../components/card-property-object/card-property-object';

const card = {
    title: 'title',
    date: 'date',
    description: 'description',
    extraDescription: 'extraDescription',
};

export default createBoard({
    name: 'CardPropertyObject',
    Board: () => (
        <CardPropertyObject
            title={card.title}
            date={card.date}
            description={card.description}
            extraDescription={card.extraDescription}
        />
    ),
    isSnippet: true,
});
