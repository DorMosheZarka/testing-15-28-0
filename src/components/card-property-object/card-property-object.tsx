import classNames from 'classnames';
import styles from '../card/card.module.scss';
import { Description } from '../../classes/description';
import D0115F47B570410F8E23C9443B47Dc2EWebp from '../../assets/d0115f47-b570-410f-8e23-c9443b47dc2e.webp';

type Version = 'alpha' | 'beta';

export interface CardProps {
    className?: string;
    title: string;
    year: number;
    description: Description;
    date: Date;
    version: Version;
    onClick: () => void;
}

export const CardPropertyObject = (props: CardProps) => {
    return (
        <div className="ui card">
            <img src={D0115F47B570410F8E23C9443B47Dc2EWebp} alt="" />
            <div className="content">
                <div className="image"></div>
                <a className="header" onClick={props.onClick}>
                    {props.title}
                </a>
                <div className="meta">
                    <span className="date">{props.year}</span>
                </div>
                <div className="description">{props.description.getPerson()}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {props.date.toDateString()}
                    {' - '}
                    {props.version}
                </a>
            </div>
        </div>
    );
};
