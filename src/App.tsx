import styles from './App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import { Cards } from './components/cards/cards';
import { Header } from './components/header/header';
import { HeroSection } from './components/hero-section/hero-section';
import { Dialog } from './components/dialog/dialog';

const wah: string = 'wah';

function App() {
    return (
        <div>
            <HeroSection
                imgUrl={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
            />
            <Header />
            <Cards />
            <Dialog title="This is a title" text="this is a text" buttonAcceptText={wah} />
        </div>
    );
}

export default App;
