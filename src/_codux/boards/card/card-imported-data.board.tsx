import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { cardData, newTitle } from '../../../constants/constants';

const { title, date, description, extraDescription } = cardData;

const titleByfunc = (newTitle: string) => newTitle;

const handleClick: () => void = () => alert(newTitle);

export default createBoard({
    name: 'Card - imported data',
    Board: () => (
        <Card
            title={titleByfunc('title ')}
            date={cardData.date}
            description={cardData.description}
            extraDescription={cardData.extraDescription}
            onClick={handleClick}
        />
    ),
    isSnippet: true,
});
