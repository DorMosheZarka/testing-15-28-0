import classNames from 'classnames';
import styles from './card-primitives.module.scss.module.scss';

export interface CardPrimitivesSetValuesProps {
    className?: string;
    title?: string;
    year?: number;
    description?: string;
    available?: boolean;
    date?: string;
    version?: bigint;
}

export const CardPrimitivesSetValues = ({
    className,
    title,
    year,
    description,
    available,
    date,
}: CardPrimitivesSetValuesProps) => {
    return (
        <div className="ui card">
            <img
                src={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
                alt=""
            />
            <div className="content">
                <a className="header">Title</a>
                <div className="meta">
                    <span className="date">2024</span>
                </div>
                <div className="description">In Stock {true}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {' - '}Wed Jun 1 2025{' '}
                </a>
            </div>
        </div>
    );
};
