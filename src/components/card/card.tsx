import classNames from 'classnames';
import styles from './card.module.scss';
import { Description } from '../../classes/description';
import D0115F47B570410F8E23C9443B47Dc2EWebp from '../../assets/d0115f47-b570-410f-8e23-c9443b47dc2e.webp';

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
            <img src={D0115F47B570410F8E23C9443B47Dc2EWebp} alt="" />
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
