import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../../components/card/card';
import { Description } from '../../../../components/classes/description';

export default createBoard({
    name: 'Card wow',
    Board: () => (
        <Card
            title="Innovative Card"
            year={2023}
            description={
                new Description('John Doe', 'Codux Inc', 2021, () => 'John Doe from Codux Inc')
            }
            date={new Date()}
            version="alpha"
            onClick={() => console.log('Card clicked')}
            imgUrl="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
        />
    ),
    isSnippet: true,
});
