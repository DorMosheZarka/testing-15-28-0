import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/Footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer text="Stay connected with us for the latest updates" />,
    isSnippet: true,
});
