import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesPropertyObjComplex } from '../../../components/card-primitives-property-obj-complex/card-primitives-property-obj-complex';

export default createBoard({
    name: 'CardPrimitivesPropertyObjComplex',
    Board: () => (
        <CardPrimitivesPropertyObjComplex
            className="custom-class"
            title="Innovative Solutions"
            year={2023}
            description="Revolutionizing the tech industry with cutting-edge developments."
            available={false}
            date="2023-04-01"
            version={BigInt(1)}
            author="Jane Doe"
            tags={['Innovation', 'Technology', 'Future']}
        />
    ),
    isSnippet: true,
});
