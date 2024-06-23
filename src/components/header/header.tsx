import classNames from 'classnames';
import styles from './header.module.scss';
import CoduxSvg from '../../assets/codux.svg?react';
import { Button, Icon } from 'semantic-ui-react';

export interface HeaderProps {
    className?: string;
    link1: string;
    link2: string;
    link3: string
}

export const Header = ({ className, link1, link2, link3 }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navBar}>
                <CoduxSvg className={styles.logo} />
                <ul className={styles.navLinks}>
                    <li className={styles.link}>{link1}</li>
                    <li className={styles.link}>{link2}</li>
                    <Button animated>
                        <Button.Content visible>{link3}</Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow right" />
                        </Button.Content>
                    </Button>
                </ul>
            </div>
        </div>
    );
};
