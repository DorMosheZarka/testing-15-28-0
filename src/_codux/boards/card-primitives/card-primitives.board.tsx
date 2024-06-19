import { createBoard } from '@wixc3/react-board';
import { CardPrimitives } from '../../../components/card-primitives/card-primitives';

interface MockData {
    text: string;
    integer: number;
    trueOrFalse: boolean;
    currentDate: null;
    veryBigNumber: bigint;
}

const mockData = {
    text: 'Mock Title',
    integer: 2024,
    trueOrFalse: true,
    currentDate: null,
    veryBigNumber: 10000000000n,
};

const text = 'const Title';
const integer = 2026;
const trueOrFalse = false;
const currentDate = null;
const veryBigNumber = 20000000000n;

export default createBoard({
    name: 'CardPrimitives - Destructuring and Refrenced',
    Board: () => (
        <CardPrimitives
            title={text}
            year={mockData.integer}
            description={undefined}
            available={mockData.trueOrFalse}
            date={mockData.currentDate}
            version={veryBigNumber}
        />
    ),
    isSnippet: true,
});