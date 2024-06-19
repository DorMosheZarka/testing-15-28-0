import { createBoard } from '@wixc3/react-board';
import { CardPrimitives } from '../../../components/card-primitives/card-primitives';

const date = new Date();

export default createBoard({
    name: 'CardPrimitives - Destructuring and Refrenced',
    Board: () => (
        <CardPrimitives
            title="Title"
            year={2024}
            description="In stock: "
            available={true}
            date={date.toDateString()}
        />
    ),
    isSnippet: true,
});
