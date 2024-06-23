import classNames from 'classnames';
import styles from './card-primitives.module.scss';

const temp = 'Mock Title';

export interface CardPrimitivesDestructuringSimpleProps {
    className?: string;
    title?: string;
    year?: number;
    description?: string;
    available?: boolean;
    date?: string | null;
    version?: bigint;
}

export const CardPrimitivesDestructuringSimple = ({
    className,
    title,
    year,
    description,
    available,
    date,
    version,
}: CardPrimitivesDestructuringSimpleProps) => {
    return (
        <div className="ui card">
            <img
                src={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
                alt=""
            />
            <div className="content">
                <a className="header">{temp}</a>
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
                    {date}
                    {' - '}
                    {version}
                </a>
            </div>
        </div>
    );
};
