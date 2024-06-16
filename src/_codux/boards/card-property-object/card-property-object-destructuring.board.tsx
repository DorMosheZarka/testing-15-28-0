import { createBoard } from '@wixc3/react-board';
import {
    CardPropertyObject,
    type CardProps,
} from '../../../components/card-property-object/card-property-object';
import { Description } from '../../../data/description/description';

const card: CardProps = {
    title: 'title',
    year: 2024,
    description: new Description('Codux', 'Wix', 5),
    date: new Date(),
    version: 'beta',
    onClick: () => null,
};

const { title, year, description, date, version, onClick } = card;

export default createBoard({
    name: 'Card Property Object - destructuring',
    Board: () => (
        <CardPropertyObject
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
