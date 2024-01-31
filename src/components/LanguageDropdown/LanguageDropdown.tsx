import { IoLanguage } from "react-icons/io5";
import Dropdown, { DropdownOptions } from "../Dropdown/Dropdown";
import { useContext } from "react";
import { Languages, TranslatorContext } from "../../contexts/TranslatorContext";

function LanguageDropdown() {
    const { setLanguage } = useContext(TranslatorContext);

    const changeLanguage = (language: Languages) => {
        setLanguage(language);
    }

    const options: DropdownOptions = [
        { labelId: 'english', onClick: () => changeLanguage('en') },
        { labelId: 'portuguese', onClick: () => changeLanguage('pt') },
    ];

    return <Dropdown className="language-dropdown" icon={<IoLanguage />} options={options}/>
}

export default LanguageDropdown;
