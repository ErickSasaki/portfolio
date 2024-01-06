import { IoHomeSharp } from "react-icons/io5";
import './Header.scss';
import { ReactElement } from 'react';

type LabelOrElement = string | ReactElement;

interface HeaderContent {
    labelOrElement: LabelOrElement;
    link?: string;
    action?: () => void;
}

function Header() {
    const headerContent: HeaderContent[] = [
        {
            labelOrElement: 'label',
        },
    ];

    return (
        <header id="header" className="header">
            <nav>
                <a href="#introduction">
                    <IoHomeSharp />
                </a>

                {headerContent.map((content) => (
                    <a href={content.link}>
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