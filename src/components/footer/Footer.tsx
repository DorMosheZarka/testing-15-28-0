import styles from './Footer.module.css';

interface FooterProps {
    text: string;
}

export function Footer({ text }: FooterProps) {
    return (
        <footer className={styles.footer}>
            <p>{text}</p>
            <p>© 2024 Fundux</p>
        </footer>
    );
}
