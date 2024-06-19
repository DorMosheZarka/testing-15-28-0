import { createBoard } from '@wixc3/react-board';
import { Card, type CardProps } from '../../../components/card/card';
import { Description } from '../../../classes/description';

const card: CardProps = {
    title: 'title',
    year: 2024,
    description: new Description('Codux', 'Wix', 2024),
    date: new Date(),
    version: 'beta',
    onClick: () => null,
    imgUrl: 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
};

const { title, year, description, date, version, onClick, imgUrl } = card;

export default createBoard({
    name: 'Card Destructuring - destructuring from obj',
    Board: () => (
        <Card
            title={version}
            year={year}
            description={description}
            date={date}
            version={card.version}
            onClick={onClick}
            imgUrl={imgUrl}
        />
    ),
    isSnippet: true,
});
