import classNames from 'classnames';
import styles from './card-primitives.module.scss.module.scss';

export interface CardPrimitivesProps {
    className?: string;
    title?: string;
    year?: number;
    description?: undefined;
    available?: boolean;
    date?: null;
    version?: bigint;
}

export const CardPrimitives = ({
    className,
    title,
    year,
    description,
    available,
    date,
}: CardPrimitivesProps) => {
    return (
        <div className="ui card">
            <img
                src={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
                alt=""
            />
            <div className="content">
                <a className="header">{title}</a>
                <div className="meta">
                    <span className="date">{year}</span>
                </div>
                <div className="description">
                    {description}
                    {available}
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {' - '}
                    {date}
                </a>
            </div>
        </div>
    );
};
