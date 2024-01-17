import { useContext } from "react";
import { Languages, TranslatorContext } from "../../contexts/TranslatorContext";
import { TranslationIds, Translations, englishTranslations, portugueseTranslations } from "../../consts/translation";

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
