import { TranslationIds } from "../../consts/translation";
import { ReactNode, useEffect, useState, MouseEvent } from "react";
import './Dropdown.scss';
import Button from "../Button/Button";

interface DropdownOption {
    labelId: TranslationIds;
    onClick: () => void;
}

export type DropdownOptions = DropdownOption[];

interface DropdownProps {
    options: DropdownOptions;
    labelId?: TranslationIds;
    icon?: ReactNode;
}

function Dropdown({ options, labelId, icon }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const onDropdownClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsOpen((open) => !open);
    }

    useEffect(() => {
        window.onclick = () => {
            setIsOpen(false);
        };
    }, []);

    return (
        <div id="dropdown-wrapper">
            <Button onClick={onDropdownClick} labelId={labelId} icon={icon} />

            {isOpen && (
                <div id="dropdown-options">
                    {options.map((option) => (
                        <Button labelId={option.labelId} onClick={option.onClick} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
