import { useContext } from "react";
import { Languages, TranslatorContext } from "../../contexts/TranslatorContext";
import { TranslationIds, Translations } from "../../consts/translation/ids";
import { englishTranslations } from "../../consts/translation/english";
import { portugueseTranslations } from "../../consts/translation/portuguese";

interface TranslatorProps {
    id: TranslationIds;
}

function Translator({ id }: TranslatorProps) {
    const { language } = useContext(TranslatorContext);

    const translate = () => {
        return getTranslations(language)[id];
    };

    const getTranslations = (language: Languages): Translations => {
        const languageTranslation: Record<Languages, Translations> = {
            'en': englishTranslations,
            'pt': portugueseTranslations,
        };

        return languageTranslation[language];
    };

    return (
        <span>
            {translate()}
        </span>
    );
}

export default Translator;
