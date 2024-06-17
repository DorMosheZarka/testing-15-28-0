import React from 'react';
import classNames from 'classnames';
import styles from './tree-node.module.scss';

export interface TreeNodeProps {
    className?: string;
    value: number[];
    children?: React.ReactNode;
}

export const TreeNode = ({ className, value, children }: TreeNodeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.node}>{value}</div>
            <div className={styles.children}>{children}</div>
        </div>
    );
};
