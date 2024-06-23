import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header link1="Home" link2="About" link3="Contact" />,
    isSnippet: true,
});
