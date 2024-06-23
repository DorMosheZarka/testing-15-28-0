import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesPropertyObjComplex } from '../../../components/card-primitives-property-obj-complex/card-primitives-property-obj-complex';

export default createBoard({
    name: 'CardPrimitivesPropertyObjComplex',
    Board: () => (
        <CardPrimitivesPropertyObjComplex
            className="custom-class"
            title="Card Title"
            year={2023}
            description="This is a detailed description of the card."
            available={false}
            date="2023-04-01"
            version={BigInt(1)}
            author="Author Name"
            tags={['tag1', 'tag2', 'tag3']}
        />
    ),
    isSnippet: true,
});
