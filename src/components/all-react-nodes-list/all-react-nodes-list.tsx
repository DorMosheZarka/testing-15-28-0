import classNames from 'classnames';
import styles from './all-react-nodes-list.module.scss';
import React from 'react';

export interface AllReactNodesListProps {
    className?: string;
    stringInstance: string; // should default to "Default Text" ✔️
    numberInstance: number; // should default to 0 ✔️
    booleanInstance: boolean; // should default to false ✔️
    undefinedInstance: undefined; // should default to undefined ✔️
    nullInstance: null; // should default to undefined ✔️
    reactElementInstance: React.ReactElement; // should default to undefined ✔️
    reactElementArrayInstance: React.ReactElement[]; // should default to undefined ✔️
}

export const AllReactNodesList = ({
    className,
    stringInstance,
    numberInstance,
    booleanInstance,
    undefinedInstance,
    nullInstance,
    reactElementInstance,
    reactElementArrayInstance,
}: AllReactNodesListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h3>{stringInstance}</h3>
            <ul>
                <li>{stringInstance}</li>
                <li>{numberInstance}</li>
                <li>{booleanInstance} (not `Error` = works)</li>
                <li>{undefinedInstance} (not `Error` = works)</li>
                <li>{nullInstance} (not `Error` = works)</li>
                <li>{reactElementInstance}</li>
                <li>
                    Array of React Elements:
                    <ul>{reactElementArrayInstance}</ul>
                </li>
            </ul>
        </div>
    );
};
