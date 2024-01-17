export type TranslationIds =
    'hi-im' |
    'introduction';

export type Translations = Record<TranslationIds, string>;

export const englishTranslations: Translations = {
    'hi-im': 'Hi, I\'m',
    'introduction': 'I\'m a front end developer who likes to write high quality code for high quality projects!'
}

export const portugueseTranslations: Translations = {
    'hi-im': 'Olá, me chamo',
    'introduction': 'Sou um desenvolvedor front end que gosta de escrever bons códigos para bons projetos!'
}
