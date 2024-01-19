import { TranslationIds } from "../../consts/translation";
import Translator from "../Translator/Translator";
import { ReactNode, MouseEvent } from "react";
import './Button.scss';

interface ButtonProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    labelId?: TranslationIds;
    icon?: ReactNode;
}

function Button({ onClick, labelId, icon }: ButtonProps) {
    return (
        <button id="button" onClick={onClick}>
            {labelId && <Translator id={labelId} />}
            {icon}
        </button>
    );
}

export default Button;
