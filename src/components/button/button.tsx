import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    text?: string;
}

export const Button = ({ className, text }: ButtonProps) => {
    return <button className={classNames(className, styles.root)}>{text}</button>;
};
