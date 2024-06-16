import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { cards, newTitle } from '../../../constants/constants';


const { title, year } = cards[0];
const card = cards[0];
const titleByfunc = (newTitle: string) => newTitle;
const handleClick: () => void = () => alert(newTitle);

export default createBoard({
    name: 'Card Destructuring - Imported data',
    Board: () => (
        <Card
            title={titleByfunc(newTitle)}
            year={year}
            description={card.description}
            date={card.date}
            version="beta"
            onClick={handleClick}
        />
    ),
    isSnippet: true,
});
