import { TranslationIds } from "../../consts/translation/ids";
import { ReactNode, useEffect, useState, MouseEvent, useRef } from "react";
import './Dropdown.scss';
import Button from "../Button/Button";

export interface DropdownOption {
    labelId: TranslationIds;
    onClick: () => void;
}

export type DropdownOptions = DropdownOption[];

interface DropdownProps {
    options: DropdownOptions;
    labelId?: TranslationIds;
    icon?: ReactNode;
    className?: string;
}

function Dropdown({ options, labelId, icon, className }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const openToLeft = useRef<boolean>(false);

    const onDropdownClick = (event: MouseEvent<HTMLButtonElement>) => {
        // this prevents the window onclick that closes the dropdown to trigger
        event.stopPropagation();

        setDropdownDirection(event);
        setIsOpen((open) => !open);
    }

    const setDropdownDirection = (event: MouseEvent<HTMLButtonElement>) => {
        const isInRightSideOfScreen = event.pageX / window.innerWidth > 0.5;

        openToLeft.current = isInRightSideOfScreen; 
    }

    useEffect(() => {
        setCloseDropdownEvent();

        return cleanCloseDropdownEvent;
    }, []);

    const setCloseDropdownEvent = () => {
        window.addEventListener('click', closeDropdown);
    };

    const cleanCloseDropdownEvent = () => {
        window.removeEventListener('click', closeDropdown);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    }

    return (
        <div className={`dropdown-wrapper ${className}`}>
            <Button onClick={onDropdownClick} labelId={labelId} icon={icon} />

            {isOpen && (
                <div className={`dropdown-options ${openToLeft.current ? 'open-left' : ''}`}>
                    {options.map((option) => (
                        <Button key={option.labelId} labelId={option.labelId} onClick={option.onClick} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
