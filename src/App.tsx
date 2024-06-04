import styles from './App.module.scss';
import ViteSvg from './assets/vite.svg';
import TypescriptSvg from './assets/typescript.svg';
import { Cards } from './components/cards/cards';
import { Header } from './components/header/header';

function App() {
    return (
        <div className={styles.root}>
            <Header />
            <Cards />
        </div>
    );
}

export default App;
