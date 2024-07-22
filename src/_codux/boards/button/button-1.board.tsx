import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import { importedString } from '../../../constants/constants';

export default createBoard({
    name: 'Button',
    Board: () => <Button className="custom-button" text={importedString} />,
    isSnippet: true,
});