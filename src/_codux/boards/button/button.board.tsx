import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import { newTitle } from '../../../constants/constants';

const moduleScopeString = 'cancel';
const num = 0; // shouldn't be suggested
const b = false;
const f = () => null;

export default createBoard({
    name: 'Button',
    Board: () => <Button text={moduleScopeString} />,
    isSnippet: true,
});
