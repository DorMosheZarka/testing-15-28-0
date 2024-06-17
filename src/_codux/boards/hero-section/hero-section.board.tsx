import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../components/hero-section/hero-section';

export default createBoard({
    name: 'HeroSection',
    Board: () => <HeroSection imgUrl={'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'}/>,
    isSnippet: true,
});
