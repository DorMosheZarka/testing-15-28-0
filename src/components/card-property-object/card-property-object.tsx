import classNames from 'classnames';
import styles from '../card/card.module.scss';

export interface CardProps {
    className?: string;
    title: string;
    year: number;
    description: string;
    date: Date;
    version: 'alpha' | 'beta';
    onClick: () => void;
}

export const CardPropertyObject = (props: CardProps) => {
    return (
        <div className="ui card">
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <div className="content">
                <div className="image"></div>
                <a className="header" onClick={props.onClick}>
                    {props.title}
                </a>
                <div className="meta">
                    <span className="date">{props.year}</span>
                </div>
                <div className="description">{props.description}</div>
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
