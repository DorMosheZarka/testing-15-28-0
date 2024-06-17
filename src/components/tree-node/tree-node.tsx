import classNames from 'classnames';
import styles from './tree-node.module.scss';

export interface TreeNodeProps {
    className?: string;
    value: number;
    left?: TreeNodeProps;
    right?: TreeNodeProps;
}

export const TreeNode = ({ className, value, left, right }: TreeNodeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.node}>{value}</div>
            {(left || right) && (
                <div className={styles.children}>
                    {left && <TreeNode {...left} />}
                    {right && <TreeNode {...right} />}
                </div>
            )}
        </div>
    );
};
