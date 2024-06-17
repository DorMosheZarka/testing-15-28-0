import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/Footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer text="Your trusted source for the latest in tech." />,
    isSnippet: true,
});
