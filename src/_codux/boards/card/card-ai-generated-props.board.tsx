import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { Description } from '../../../classes/description';

const mockDescription = new Description('John Doe', 'Acme Inc.', 2020);

export default createBoard({
    name: 'Card - AI Generated Props',
    Board: () => (
        <Card
            title="Innovative Card"
            year={2021}
            description={mockDescription}
            date={new Date('2021-08-15')}
            version="beta"
            onClick={() => console.log('Card clicked')}
            imgUrl="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
        />
    ),
    isSnippet: true,
});