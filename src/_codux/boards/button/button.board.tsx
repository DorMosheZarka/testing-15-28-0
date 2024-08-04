import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import { newTitle } from '../../../constants/constants';

const moduleScopeString = 'cancel';

export default createBoard({
    name: 'Button',
    Board: () => <Button text={moduleScopeString} />,
    isSnippet: true,
});
