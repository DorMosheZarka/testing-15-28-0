import { createBoard } from '@wixc3/react-board';
import { Card, type CardProps } from '../../../components/card/card';

const title = 'this is a title! {}';
const year = 2024;
const description = 'Software';
const date = new Date(2021, 5, 16);
const version = 'beta';
const onClick = () => null;

export default createBoard({
    name: 'Card Destructuring - in file const',
    Board: () => (
        <Card
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
