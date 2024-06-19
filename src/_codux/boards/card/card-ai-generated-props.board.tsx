import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { Description } from '../../../components/classes/description';

const mockDescription = new Description(
    'John Doe',
    'Acme Inc.',
    2001,
    () => 'John Doe from Acme Inc.',
);

export default createBoard({
    name: 'Card - AI Generated Props',
    Board: () => (
        <Card
            className="custom-card-class"
            title="Innovative Solutions"
            year={2023}
            description={mockDescription}
            date={new Date('2023-01-01')}
            version="alpha"
            onClick={() => console.log('Card clicked')}
            imgUrl="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
        />
    ),
    isSnippet: true,
});
