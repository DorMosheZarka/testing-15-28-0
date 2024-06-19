import classNames from 'classnames';
import styles from './card-primitives.module.scss.module.scss';

export interface CardPrimitivesPropertyObjProps {
    className?: string;
    title?: string;
    year?: number;
    description?: undefined;
    available?: boolean;
    date?: null;
    version?: bigint;
}

export const CardPrimitivesPropertyObj = (props: CardPrimitivesPropertyObjProps) => {
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
                    <span className="date"></span>
                </div>
                <div className="description"></div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {' - '}
                </a>
            </div>
        </div>
    );
};
