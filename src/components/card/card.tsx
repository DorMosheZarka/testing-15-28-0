import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    title: string;
    date: string;
    description: string;
    extraDescription: string;
    onClick: () => void;
}

export const Card = ({
    className,
    title,
    date,
    description,
    extraDescription,
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
                    <span className="date">{date}</span>
                </div>
                <div className="description">{description}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {extraDescription}
                </a>
            </div>
        </div>
    );
};
