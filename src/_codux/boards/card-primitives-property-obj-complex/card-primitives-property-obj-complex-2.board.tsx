import { createBoard } from '@wixc3/react-board';
import { CardPrimitivesPropertyObjComplex } from '../../../components/card-primitives-property-obj-complex/card-primitives-property-obj-complex';

export default createBoard({
    name: 'CardPrimitivesPropertyObjComplex',
    Board: () => (
        <CardPrimitivesPropertyObjComplex
            className="custom-class"
            title="The Great Gatsby"
            year={1925}
            description="A novel written by American author F. Scott Fitzgerald."
            available={false}
            date="1925-04-10"
            version={BigInt(1)}
            author="F. Scott Fitzgerald"
            tags={['classic', 'literature']}
        />
    ),
    isSnippet: true,
});
