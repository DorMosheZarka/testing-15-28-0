import classNames from 'classnames';
import styles from './header.module.scss';
import { ReactComponent as CoduxSvg } from '../../assets/codux.svg';
import { Button, Icon } from 'semantic-ui-react';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navBar}>
                <div>
                    <CoduxSvg className={styles.logo} />
                </div>
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
