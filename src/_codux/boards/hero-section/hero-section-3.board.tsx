import { createBoard } from '@wixc3/react-board';
import { HeroSection } from '../../../components/hero-section/hero-section';

export default createBoard({
    name: 'HeroSection',
    Board: () => (
        <HeroSection className="custom-hero-section" imgUrl="https://example.com/hero.jpg" />
    ),
    isSnippet: true,
});
