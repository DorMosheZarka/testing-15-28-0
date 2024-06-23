import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesDestructuringSimple } from '../../../components/card-primitives/card-primitives';

export default createBoard({
    name: 'CardPrimitivesDestructuringSimple',
    Board: () => (
        <CardPrimitivesDestructuringSimple
            className="custom-class"
            title="Innovative Solutions"
            year={2023}
            description="Revolutionizing the tech industry with cutting-edge developments."
            available={true}
            date="2023-04-01"
            version={BigInt(1)}
        />
    ),
    isSnippet: true,
});
