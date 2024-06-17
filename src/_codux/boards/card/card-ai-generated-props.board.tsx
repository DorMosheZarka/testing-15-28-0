import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { Description } from '../../../classes/description';

const mockDescription = new Description('John Doe', 'Acme Inc.', 2020);

export default createBoard({
    name: 'Card - AI Generated Props',
    Board: () => (
        <Card
            className="custom-class"
            title="Innovative Solutions"
            year={2023}
            description={mockDescription}
            date={new Date('2023-04-01')}
            version="alpha"
            onClick={() => console.log('Card clicked')}
            imgUrl="https://via.placeholder.com/150"
        />
    ),
    isSnippet: true,
});