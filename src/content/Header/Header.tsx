import { IoCodeSlash } from "react-icons/io5";
import './Header.scss';
import { ReactElement, useEffect } from 'react';
import useTheme from "../../hooks/useTheme";

type LabelOrElement = string | ReactElement;

interface HeaderContent {
    key: number;
    labelOrElement: LabelOrElement;
    link?: string;
    action?: () => void;
}

function Header() {
    const headerContent: HeaderContent[] = [
        {
            key: 0,
            labelOrElement: 'label',
        },
    ];

    return (
        <header id="header" className="header">
            <nav>
                <a href="#introduction">
                    <IoCodeSlash />
                </a>

                {headerContent.map((content) => (
                    <a href={content.link} key={content.key}>
                        {typeof content.labelOrElement === 'string'
                            ? <p> {content.labelOrElement} </p>
                            : <> {content.labelOrElement} </>}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header;