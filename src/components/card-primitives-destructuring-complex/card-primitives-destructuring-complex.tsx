import classNames from 'classnames';
import styles from './card-primitives-destructuring-complex.module.scss';

export interface CardPrimitivesDestructuringComplexProps {
    className?: string;
    title?: string;
    year?: number;
    description?: string;
    available?: boolean;
    date?: null;
    version?: bigint;
    author?: string;
    tags?: string[];
}

export const CardPrimitivesDestructuringComplex = ({
    className,
    title,
    year,
    description,
    available,
    date,
    version,
    author,
    tags,
}: CardPrimitivesDestructuringComplexProps) => {
    const getMetaDate = (
        year: number | undefined,
        available: boolean | undefined,
    ): React.ReactElement => {
        if (year) return <span>{year}</span>;
        return available ? <span>2025</span> : <span>2026</span>;
    };

    const renderDescription = (
        description: string | undefined,
        available: boolean | undefined,
    ): React.ReactElement => {
        if (!description) return <span>No description provided.</span>;
        return (
            <div style={{ fontWeight: available ? 'bold' : 'normal' }}>
                {description}
                {available && ((s: string) => available.toString().toUpperCase() + s)('Hey')}
            </div>
        );
    };

    const getVersionText = (version: bigint | undefined): React.ReactNode => {
        if (version) return version.toString();
        return 'alpha';
    };

    const renderTags = (tags: string[] | undefined): React.ReactElement | null => {
        if (!tags || tags.length === 0) return null;
        return (
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        );
    };

    const getDateText = (date: null | undefined): string => {
        return date || new Date().toDateString();
    };

    return (
        <div className={classNames('ui card', className)}>
            <img
                src={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
                alt={title}
            />
            <div className="content">
                <a className="header">
                    {(() => (
                        <div>{title}</div>
                    ))()}
                </a>
                <div className="meta">
                    <span className="date">{getMetaDate(year, available)}</span>
                </div>
                <div className="description">{renderDescription(description, available)}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {getDateText(date)}
                    {' - '}
                    {getVersionText(version)}
                </a>
                <div className="author">{!author && <span>Author: {author}</span>}</div>
                {renderTags(tags)}
            </div>
        </div>
    );
};
