import { createBoard } from '@wixc3/react-board';
import { NewImgOnTop } from '../../../components/new-img-on-top/new-img-on-top';

export default createBoard({
    name: 'NewImgOnTop',
    Board: () => <NewImgOnTop text="" />,
    isSnippet: true,
    tags: ['media-manager'],
    environmentProps: {
        windowWidth: 1024,
    },
});
