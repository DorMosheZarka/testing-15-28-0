import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';

const title: string = 'Dialog Title';
const text: string = 'This is some dialog text';

export default createBoard({
    name: 'Dialog',
    Board: () => <Dialog title={title} text={text} />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#57576b',
    },
});
