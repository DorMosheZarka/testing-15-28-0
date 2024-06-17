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
}

export const Card = ({
    className,
    title,
    year,
    description,
    version,
    date,
    onClick,
}: CardProps) => {
    return (
        <div className="ui card">
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <div className="content">
                <div className="image"></div>
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
