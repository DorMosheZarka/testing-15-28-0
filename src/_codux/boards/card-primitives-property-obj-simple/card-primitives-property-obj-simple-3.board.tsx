import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesPropertyObjSimple } from '../../../components/card-complex/card-complex';

export default createBoard({
    name: 'CardPrimitivesPropertyObjSimple',
    Board: () => (
        <CardPrimitivesPropertyObjSimple
            className="custom-class"
            title="Card Title"
            year={2023}
            available={true}
            date={null}
            version={BigInt(1)}
        />
    ),
    isSnippet: true,
});
