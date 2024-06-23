import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';

const title: string = 'Dialog Title';
const text: string = 'This is some dialog text';
const buttonAccept: string = 'accept';
const buttonCancel: string = 'cancel';

export default createBoard({
    name: 'Dialog',
    Board: () => (
        <Dialog
            title={title}
            text={text}
            buttonAcceptText={buttonAccept}
            buttonCancelText={buttonCancel}
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#57576b',
    },
});
