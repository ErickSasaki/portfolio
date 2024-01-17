import { Dispatch, SetStateAction, createContext } from 'react';

export type Languages = 'pt' | 'en';

interface TranslatorContextValue {
    language: Languages;
    setLanguage: Dispatch<SetStateAction<Languages>> | (() => void);
}

const TranslatorContext = createContext<TranslatorContextValue>({
    language: 'en',
    setLanguage: () => {},
});

export { TranslatorContext };