import classNames from 'classnames';
import styles from './suggest.module.scss';

type Prim = string | number | boolean | null | undefined | bigint;

export interface SuggestProps {
    className?: string;
    primObject: { s: string; n: number; b: boolean; nil: null; u: undefined; bi: bigint };
    primS: string;
    primN: number;
    primB: boolean;
    primNil: null;
    primU: undefined;
    primBi: bigint;
    primOmni: Prim;
}

const s = 'module scope string';
const n = 0;
const b = false;
const nil = null;
const u = undefined;
const bi = 10n;

export const Suggest = ({ className, primObject }: SuggestProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ul>
                <li>{primObject.s}</li>
                <li>{primObject.n}</li>
                <li>{primObject.b ? 'true' : 'false'}</li>
                <li>{primObject.nil === null ? 'null' : primObject.nil}</li>
                <li>{primObject.u === undefined ? 'undefined' : primObject.u}</li>
                <li>{primObject.bi}</li>
            </ul>
        </div>
    );
};
