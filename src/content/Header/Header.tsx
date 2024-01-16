import { IoCodeSlash } from "react-icons/io5";
import './Header.scss';
import { ReactElement } from 'react';
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

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
        {
            key: 1,
            labelOrElement: <ThemeToggle />
        },
    ];

    return (
        <header id="header" className="header">
            <nav>
                <a href="#introduction">
                    <IoCodeSlash />
                </a>

                <div className="content">
                    {headerContent.map((content) => (
                        <>
                            {typeof content.labelOrElement === 'string' ? (
                                <a href={content.link} key={content.key}>
                                    <p> {content.labelOrElement} </p>
                                </a>
                            ) : (
                                <> {content.labelOrElement} </>
                            )}
                        </>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header;