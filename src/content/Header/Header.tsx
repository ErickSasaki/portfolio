import { IoCodeSlash } from "react-icons/io5";
import './Header.scss';
import { ReactElement } from 'react';
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";

type LabelOrElement = string | ReactElement;

interface HeaderLinks {
    label: LabelOrElement;
    link: string;
}

function Header() {
    const headerLinks: HeaderLinks[] = [
        {
            label: 'Introduction',
            link: '#introduction',
        },
        {
            label: 'Skills',
            link: '#skills',
        },
        {
            label: 'Projects',
            link: '#projects',
        },
        {
            label: 'Contact',
            link: '#contact',
        },
    ];

    return (
        <header id="header" className="header">
            <nav>
                <a id="home-button" href="#introduction">
                    <IoCodeSlash />
                </a>

                <div className="nav-content">
                    {
                        headerLinks.map((headerLink) => (
                            <a href={headerLink.link}>
                                <p>{headerLink.label} </p>

                                <div className="animated-border"/>
                            </a>
                        ))
                    }
                </div>
            </nav>

            <LanguageDropdown />
            <ThemeToggle />
        </header>
    )
}

export default Header;