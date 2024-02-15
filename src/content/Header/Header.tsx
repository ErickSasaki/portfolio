import { IoCodeSlash, IoMenu } from "react-icons/io5";
import './Header.scss';
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageDropdown from "../../components/LanguageDropdown/LanguageDropdown";
import Translator from "../../components/Translator/Translator";
import { TranslationIds } from "../../consts/translation/ids";
import Dropdown, { DropdownOption, DropdownOptions } from "../../components/Dropdown/Dropdown";
import { useMemo } from "react";

interface HeaderLinks {
    labelId: TranslationIds;
    link: string;
} 

function Header() {
    const headerLinks: HeaderLinks[] = useMemo(() => [
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
    ], []);

    const mobileMenuOptions: DropdownOptions = useMemo(() => (
        headerLinks.map((headerLink): DropdownOption => ({
            labelId: headerLink.labelId,
            onClick: () => navigateToSection(headerLink.link),
        }))
    ), [headerLinks]);

    const navigateToSection = (elementId: string) => {
        window.location.href = elementId;
    }

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
                                    <Translator id={headerLink.labelId} />
                                </p>

                                <div className="animated-border" />
                            </a>
                        ))
                    }
                </div>
            </nav>

            <LanguageDropdown />
            <ThemeToggle />
            <Dropdown className="mobile-menu" options={mobileMenuOptions} icon={<IoMenu />} />
        </header>
    )
}

export default Header;