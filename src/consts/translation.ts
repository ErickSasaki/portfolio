export type TranslationIds =
    'hi-im' |
    'introduction' |
    'portuguese' |
    'english';

export type Translations = Record<TranslationIds, string>;

export const englishTranslations: Translations = {
    'hi-im': 'Hi, I\'m',
    'introduction': 'I\'m a front end developer who likes to write high quality code for high quality projects!',
    'portuguese': "portuguese",
    'english': 'english',
}

export const portugueseTranslations: Translations = {
    'hi-im': 'Olá, sou',
    'introduction': 'Um desenvolvedor front end que gosta de escrever bons códigos para bons projetos!',
    'portuguese': "português",
    'english': 'inglês',
}
