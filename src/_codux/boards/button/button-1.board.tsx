import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'Button',
    Board: () => <Button className="custom-button" text="Click Me" />,
    isSnippet: true,
});