import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';

export default createBoard({
    name: 'Dialog',
    Board: () => (
        <Dialog
            title="Confirmation"
            text="Are you sure you want to proceed with this action?"
            buttonAcceptText="Yes"
            buttonCancelText="No"
        />
    ),
    isSnippet: true,
});
