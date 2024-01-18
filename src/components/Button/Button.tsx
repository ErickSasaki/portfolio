import { TranslationIds } from "../../consts/translation";
import Translator from "../Translator/Translator";
import { ReactNode } from "react";
import './Button.scss';

interface ButtonProps {
    onClick: () => void;
    labelId?: TranslationIds;
    icon?: ReactNode;
}

function Dropdown({ onClick, labelId, icon }: ButtonProps) {
    return (
        <button id="button" onClick={onClick}>
            {labelId && <Translator id={labelId} />}
            {icon}
        </button>
    );
}

export default Dropdown;
