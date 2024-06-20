import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesDestructuringComplex } from '../../../components/card-primitives-destructuring-complex/card-primitives-destructuring-complex';

export default createBoard({
    name: 'CardPrimitivesDestructuringComplex - All',
    Board: () => <CardPrimitivesDestructuringComplex />,
    isSnippet: true,
});
