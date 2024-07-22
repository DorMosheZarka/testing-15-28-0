import classNames from 'classnames';
import styles from '../card/card.module.scss';
import { Description } from '../../classes/description';

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
            <img
                alt=""
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            />
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
