import { createBoard } from '@wixc3/react-board';
import { CardPropertyObject } from '../../../components/card-property-object/card-property-object';
import { Description } from '../../../data/description/description';

const companyDescription = new Description('Codux', 'Wix', 5);

const title = 'Codux';
const year = 2024;
const description = companyDescription;
const date = new Date(2021, 5, 16);
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
