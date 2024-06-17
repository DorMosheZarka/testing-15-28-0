import classNames from 'classnames';
import styles from './bin-tree-node.module.scss';
import { Node } from '../../classes/node';

export interface BinTreeNodeProps {
    className?: string;
    value: Node;
    left?: BinTreeNodeProps;
    right?: BinTreeNodeProps;
}

export const BinTreeNode = ({ className, value, left, right }: BinTreeNodeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.node}>{value.getValue()}</div>
            {(left || right) && (
                <div className={styles.children}>
                    {left && <BinTreeNode {...left} />}
                    {right && <BinTreeNode {...right} />}
                </div>
            )}
        </div>
    );
};
