import classNames from 'classnames';
import styles from './all-this-props-should-be-removed.module.scss';

export interface AllThisPropsShouldBeRemovedProps {
    className?: string;
    [key: string]: any;
}

export const AllThisPropsShouldBeRemoved = ({ className }: AllThisPropsShouldBeRemovedProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.description}>
                This component is a bit tricky since it doesn’t actually render anything. <br />
                Instead, it checks all the props that should be removed when disconnecting.
            </p>
        </div>
    );
};
