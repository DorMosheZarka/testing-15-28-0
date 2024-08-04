import classNames from 'classnames';
import styles from './button.module.scss';
import { importedString } from '../../constants/constants';

export interface ButtonProps {
    className?: string;
    text?: string;
}

export const Button = ({ className, text, ...rest }: ButtonProps) => {
    console.log(rest);
    const componentScopeJSXElements = [<>hello</>, <span>world</span>];
    return <button className={classNames(className)}>{importedString}</button>;
};
