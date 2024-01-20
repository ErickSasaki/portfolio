import { IoCodeSlash } from "react-icons/io5";
import './Header.scss';
import { ReactElement } from 'react';
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";

type LabelOrElement = string | ReactElement;

interface HeaderContent {
    labelOrElement: LabelOrElement;
    link?: string;
    action?: () => void;
}

function Header() {
    const headerContent: HeaderContent[] = [
        {
            labelOrElement: <LanguageDropdown />
        },
        {
            labelOrElement: <ThemeToggle />
        },
    ];

    return (
        <header id="header" className="header">
            <nav>
                <a id="home-button" href="#introduction">
                    <IoCodeSlash />
                </a>

                <div className="content">
                    {headerContent.map((content, index) => (
                        <div key={index}>
                            {typeof content.labelOrElement === 'string' ? (
                                <a href={content.link}>
                                    <p> {content.labelOrElement} </p>
                                </a>
                            ) : (
                                <> {content.labelOrElement} </>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header;