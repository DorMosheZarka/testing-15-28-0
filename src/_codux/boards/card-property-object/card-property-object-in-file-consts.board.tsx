import { createBoard } from '@wixc3/react-board';
import { CardPropertyObject } from '../../../components/card-property-object/card-property-object';

const title = 'Codux';
const year = 2024;
const description = 'Software';
const date = new Date(2024, 5, 16);
const version = 'beta';
const onClick = () => null;

export default createBoard({
    name: 'CardPropertyObject - in file consts',
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
