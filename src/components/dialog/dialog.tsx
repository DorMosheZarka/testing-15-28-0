import classNames from 'classnames';
import styles from './dialog.module.scss';
import { Button } from '../button/button';

export interface DialogProps {
    className?: string;
    title: string;
    text: string;
}

export const Dialog = ({ className, title, text }: DialogProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <header className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.exit}>&times;</div>
            </header>
            <main className={styles.main}>{text}</main>
            <footer className={styles.footer}>
                <Button text="button" />
                <Button text="button" />
            </footer>
        </div>
    );
};
