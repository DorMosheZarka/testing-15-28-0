import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesPropertyObj } from '../../../components/card-complex/card-complex';

export default createBoard({
    name: 'CardPrimitivesPropertyObj - Refrenced',
    Board: () => <CardPrimitivesPropertyObj />,
    isSnippet: true,
});
