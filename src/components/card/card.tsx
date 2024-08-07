import classNames from 'classnames';
import styles from './card.module.scss';
import { Description } from '../../classes/description';

export interface CardProps {
    className?: string;
    title: string;
    year: number;
    description: Description;
    date: Date;
    version: 'alpha' | 'beta';
    onClick: () => void;
    imgUrl?: string;
}

export const Card = ({
    className,
    title,
    year,
    description,
    version,
    date,
    onClick,
    imgUrl,
}: CardProps) => {
    return (
        <div className="ui card">
            <img src={imgUrl} alt="" />
            <div className="content" about={imgUrl}>
                <a className="header" onClick={onClick}>
                    {title}
                </a>
                <div className="meta">
                    <span className="date">{year}</span>
                </div>
                <div className="description">{description.getPerson()}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {date.toDateString()}
                    {' - '}
                    {version}
                </a>
            </div>
        </div>
    );
};
