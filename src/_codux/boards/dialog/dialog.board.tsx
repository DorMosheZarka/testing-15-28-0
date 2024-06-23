import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';

export default createBoard({
    name: 'Dialog',
    Board: () => <Dialog />,
    isSnippet: true,
});
