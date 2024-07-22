export interface NewImgOnTopProps {
    className?: string;
    text: string | Number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewImgOnTop = ({ className, text }: NewImgOnTopProps) => {
    return <div className={className}></div>;
};
