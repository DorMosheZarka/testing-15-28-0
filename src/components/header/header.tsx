import classNames from 'classnames';
import styles from './header.module.scss';
import CoduxSvg from '../../assets/codux.svg?react';
import { Button, Icon } from 'semantic-ui-react';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navBar}>
                <CoduxSvg className={styles.logo} />
                <ul className={styles.navLinks}>
                    <li className={styles.link}>Home</li>
                    <li className={styles.link}>About</li>
                    <Button animated>
                        <Button.Content visible>Log In</Button.Content>
                        <Button.Content hidden>
                            <Icon name="arrow right" />
                        </Button.Content>
                    </Button>
                </ul>
            </div>
        </div>
    );
};
