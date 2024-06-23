import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';

export default createBoard({
    name: 'Dialog',
    Board: () => (
        <Dialog
            title="Dialog Title"
            text="This is the content of the dialog. It provides information to the user and requires action."
            buttonAcceptText="Accept"
            buttonCancelText="Cancel"
        />
    ),
    isSnippet: true,
});