import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesSetValues } from '../../../components/card-primitives-set-values/card-primitives-set-values';

export default createBoard({
    name: 'CardPrimitivesSetValues',
    Board: () => <CardPrimitivesSetValues className="custom-class" />,
    isSnippet: true,
});
