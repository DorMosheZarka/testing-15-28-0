import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

const text = 'cancel';

export default createBoard({
    name: 'Button',
    Board: () => <Button text="button" />,
    isSnippet: true,
});
