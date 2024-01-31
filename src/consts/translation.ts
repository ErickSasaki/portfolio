export type TranslationIds =
    'hi-im' |
    'introduction-text' |
    'portuguese' |
    'english' |
    'experience' |
    'introduction' |
    'skills' |
    'projects' |
    'contact' |
    'main' |
    'base' |
    'tests' |
    'others';

export type Translations = Record<TranslationIds, string>;

export const englishTranslations: Translations = {
    'hi-im': 'Hi, I\'m',
    'introduction-text': 'I\'m a front end developer who likes to write high quality code for high quality projects!',
    'experience': 'With 4 years of experience as a front-end developer, I have had the opportunity to work on various projects and use different frameworks and technologies, with the main ones being Angular, React, Ionic, and React Native.',
    'portuguese': "portuguese",
    'english': 'english',
    'introduction': 'Introduction',
    'skills': 'Skills',
    'projects': 'Projects',
    'contact': 'Contact',
    'main': 'Main',
    'tests': 'Tests',
    'base': 'Base',
    'others': 'Others',
};

export const portugueseTranslations: Translations = {
    'hi-im': 'Olá, sou',
    'introduction-text': 'Um desenvolvedor front end que gosta de escrever bons códigos para bons projetos!',
    'experience': 'Com 4 anos de experiência como front end, tive oportunidade de trabalhar com diversos projetos e usar diferentes frameworks e tecnologias, sendo as principais Angular, React, Ionic e React native.',
    'portuguese': "português",
    'english': 'inglês',
    'introduction': 'Introdução',
    'skills': 'Skills',
    'projects': 'Projetos',
    'contact': 'Contato',
    'main': 'Principais',
    'tests': 'Testes',
    'base': 'Base',
    'others': 'Outros',
};
