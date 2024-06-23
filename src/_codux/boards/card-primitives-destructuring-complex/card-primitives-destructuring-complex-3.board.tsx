import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesDestructuringComplex } from '../../../components/card-primitives-destructuring-complex/card-primitives-destructuring-complex';

export default createBoard({
    name: 'CardPrimitivesDestructuringComplex',
    Board: () => (
        <CardPrimitivesDestructuringComplex
            className="custom-class"
            title="Innovative Solutions"
            year={2023}
            description="Revolutionizing the tech industry with cutting-edge developments."
            available={true}
            date={null}
            version={BigInt(1)}
            author="Tech Innovators Inc."
            tags={['Innovation', 'Technology', 'Future']}
        />
    ),
    isSnippet: true,
});
