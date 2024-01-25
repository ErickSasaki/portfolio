import { Languages } from "../../src/contexts/TranslatorContext";

describe('app', () => {
    const visitWithDefaultLanguage = (language: Languages) => {
        cy.visit('/', {
            onBeforeLoad(window) {
                Object.defineProperty(window.navigator, 'language', {
                    value: language,
                });
            }
        });
    }

    it('should use browser language to define the translation', () => {
        visitWithDefaultLanguage('en');
        cy.contains('Hi, I\'m');

        visitWithDefaultLanguage('pt');
        cy.contains('Olá, sou');
    });
});