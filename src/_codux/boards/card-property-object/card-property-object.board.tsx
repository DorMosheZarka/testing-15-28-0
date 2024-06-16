import { createBoard } from '@wixc3/react-board';
import { CardPropertyObject } from '../../../components/card-property-object/card-property-object';
import { cards, newTitle } from '../../../constants/constants';

const { title, year } = cards[0];
const card = cards[0];
const titleByfunc = (newTitle: string) => newTitle;
const handleClick: () => void = () => alert(newTitle);

export default createBoard({
    name: 'Card Propery object - Imported data',
    Board: () => (
        <CardPropertyObject
            title={titleByfunc(newTitle)}
            year={year}
            description={card.description}
            date={card.date}
            version={card.version}
            onClick={handleClick}
        />
    ),
    isSnippet: true,
});
