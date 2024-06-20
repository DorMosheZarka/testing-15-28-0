import classNames from 'classnames';
import styles from './card-primitives.module.scss.module.scss';

export interface CardPrimitivesPropertyObjSimpleProps {
    className?: string;
    title?: string;
    year?: number;
    description?: undefined;
    available?: boolean;
    date?: null;
    version?: bigint;
}

export const CardPrimitivesPropertyObjSimple = (props: CardPrimitivesPropertyObjSimpleProps) => {
    return (
        <div className="ui card">
            <img
                src={
                    'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg'
                }
                alt=""
            />
            <div className="content">
                <a className="header">{props.title}</a>
                <div className="meta">
                    <span className="date">{props.year}</span>
                </div>
                <div className="description">{props.description}</div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {props.date}
                    {' - '}
                    {props.version}
                </a>
            </div>
        </div>
    );
};
