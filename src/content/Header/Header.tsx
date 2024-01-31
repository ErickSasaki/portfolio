import { IoCodeSlash } from "react-icons/io5";
import './Header.scss';
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";
import Translator from "../../components/Translator/Translator";
import { TranslationIds } from "../../consts/translation";

interface HeaderLinks {
    labelId: TranslationIds;
    link: string;
}

function Header() {
    const headerLinks: HeaderLinks[] = [
        {
            labelId: 'introduction',
            link: '#introduction',
        },
        {
            labelId: 'skills',
            link: '#skills',
        },
        {
            labelId: 'projects',
            link: '#projects',
        },
        {
            labelId: 'contact',
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
                                <p>
                                    <Translator id={headerLink.labelId}/>
                                </p>

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