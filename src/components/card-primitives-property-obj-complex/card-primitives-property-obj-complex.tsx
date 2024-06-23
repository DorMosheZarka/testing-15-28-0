import classNames from 'classnames';
import styles from './card-primitives-property-obj-complex.module.scss';

export interface CardPrimitivesPropertyObjComplexProps {
    className?: string;
    title?: string;
    year?: number;
    description?: string;
    available?: boolean;
    date?: string | null;
    version?: bigint;
    author?: string;
    tags?: string[];
}

export const CardPrimitivesPropertyObjComplex = (props: CardPrimitivesPropertyObjComplexProps) => {
    const getMetaDate = (
        year: number | undefined,
        available: boolean | undefined,
    ): React.ReactElement => {
        if (year) return <span>{year}</span>;
        return available ? <span>2020</span> : <span>2026</span>;
    };

    const renderDescription = (
        description: string | undefined,
        available: boolean | undefined,
    ): React.ReactElement => {
        if (!description) return <span>No description provided.</span>;
        return (
            <div style={{ fontWeight: available ? 'bold' : 'normal' }}>
                {description}
                {available && ((s: string) => available.toString().toUpperCase() + s)(' Hey')}
            </div>
        );
    };

    const getVersionText = (version: bigint | undefined): string => {
        if (version) return version.toString() + '.0.0';
        return 'alpha';
    };

    const renderTags = (tags: string[] | undefined): React.ReactElement | null => {
        if (!tags || tags.length === 0) return null;
        return (
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        );
    };

    const getDateText = (date: string | null | undefined): string => {
        return date || 'No date provided';
    };

    return (
        <div className={classNames('ui card', props.className)}>
            <img
                src={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
                alt=""
            />
            <div className="content">
                <a className="header">
                    {(() => (
                        <div>{props.title}</div>
                    ))()}
                </a>
                <div className="meta">
                    <span className="date">{getMetaDate(props.year, props.available)}</span>
                </div>
                <div className="description">
                    {renderDescription(props.description, props.available)}
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {getDateText(props.date)}
                    {' - '}
                    {getVersionText(props.version)}
                </a>
                <div className="author">{props.author && <span>Author: {props.author}</span>}</div>
                {renderTags(props.tags)}
            </div>
        </div>
    );
};
