import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dialog = ({ className }: DialogProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
