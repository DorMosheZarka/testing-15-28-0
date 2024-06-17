import { createBoard } from '@wixc3/react-board';
import { Card, type CardProps } from '../../../components/card/card';
import { Description } from '../../../classes/description';

const companyDescription = new Description('Codux', 'Wix', 5);

const title = 'Codux';
const year = 2024;
const description = companyDescription;
const date = new Date(2021, 5, 16);
const version = 'beta';
const onClick = () => null;
const imgUrl: string =
    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg';

export default createBoard({
    name: 'Card Destructuring - in file consts',
    Board: () => (
        <Card
            title={title}
            year={year}
            description={description}
            date={date}
            version={version}
            onClick={onClick}
            imgUrl={imgUrl}
        />
    ),
    isSnippet: true,
});
