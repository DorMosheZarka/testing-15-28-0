import classNames from 'classnames';
import styles from '../card/card.module.scss';

export interface CardProps {
    className?: string;
    title: string;
    date: string;
    description: string;
    extraDescription: string;
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
                <a className="header">{props.title}</a>
                <div className="meta">
                    <span className="date">{props.date}</span>
                </div>
                <div className="description">{props.description}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {props.extraDescription}
                </a>
            </div>
        </div>
    );
};
