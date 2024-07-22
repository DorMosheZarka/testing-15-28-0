import { createBoard } from '@wixc3/react-board';
import {
    AllReactNodesList,
    Name,
} from '../../../components/all-react-nodes-list/all-react-nodes-list';
import { o } from './const';

const stringInstance: string = 'stringInstance';
const numberInstance: number = 0;
const booleanInstance: boolean = true;
const undefinedInstance: undefined = undefined;
const nullInstance: null = null;
const reactElementInstance: React.ReactElement = <>this is a react element instance</>;
const reactElementArrayInstance: React.ReactElement[] = [
    <li key="1">{stringInstance}</li>,
    <li key="2">{numberInstance}</li>,
    <li key="3">{booleanInstance} (not `Error` = works)</li>,
    <li key="4">{undefinedInstance} (not `Error` = works)</li>,
    <li key="5">{nullInstance} (not `Error` = works)</li>,
    <li key="6">{reactElementInstance}</li>,
];

console.log(o);
const blue = 'blue';

export default createBoard({
    name: 'AllReactNodesList',
    Board: () => (
        <AllReactNodesList
            stringInstance={stringInstance}
            numberInstance={numberInstance}
            booleanInstance={booleanInstance}
            undefinedInstance={undefinedInstance}
            nullInstance={nullInstance}
            reactElementInstance={reactElementInstance}
            reactElementArrayInstance={reactElementArrayInstance}
            name={Name.Alisa}
            color={blue}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 756,
    },
});
