import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { Description } from '../../../classes/description';

export default createBoard({
    name: 'Card - AI Generated Props',
    Board: () => (
        <Card
            className="custom-card-class"
            title="Innovative Card"
            year={2023}
            description={new Description('John Doe', 'Tech Inc', 2010)}
            date={new Date()}
            version="alpha"
            onClick={() => console.log('Card clicked')}
            imgUrl="https://via.placeholder.com/150"
        />
    ),
    isSnippet: true,
});