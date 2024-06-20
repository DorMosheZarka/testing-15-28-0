import { createBoard } from '@wixc3/react-board';
import {
    CardPrimitivesPropertyObjComplex,
    type CardPrimitivesPropertyObjComplexProps,
} from '../../../components/card-primitives-property-obj-complex/card-primitives-property-obj-complex';

const cardProps: CardPrimitivesPropertyObjComplexProps = {
    className: 'custom-card',
    title: 'Card Title',
    year: 2023,
    description: undefined,
    available: true,
    date: null,
    version: BigInt(1),
    author: 'John Doe',
    tags: ['tag1', 'tag2', 'tag3'],
};

export default createBoard({
    name: 'CardPrimitivesPropertyObjComplex',
    Board: () => (
        <CardPrimitivesPropertyObjComplex
            author={cardProps.author}
            available={true}
            date={cardProps.date}
            description={cardProps.description}
            tags={cardProps.tags}
            title={cardProps.title}
            version={cardProps.version}
            year={cardProps.year}
        />
    ),
    isSnippet: true,
});
