import classNames from 'classnames';
import styles from './hero-section.module.scss';

export interface HeroSectionProps {
    className?: string;
    imgUrl: string;
}

export const HeroSection = ({ className, imgUrl }: HeroSectionProps) => {
    return (
        <div
            className={classNames(styles.root, className)}
            style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
    );
};
