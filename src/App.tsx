import './App.scss';
import Introduction from './content/Introduction/Introduction';
import Header from './content/Header/Header';
import { Languages, TranslatorContext } from './contexts/TranslatorContext';
import { useState } from 'react';
import Skills from './content/Skills/Skills';
import Projects from './content/Projects/Projects';
import Contact from './content/Contact/Contact';

function App() {
    const getLanguage = (): Languages => {
        const browserLanguage = navigator.language;

        if (browserLanguage.startsWith('pt')) {
            return 'pt';
        }

        return 'en';
    };

    const [language, setLanguage] = useState<Languages>(getLanguage());

    return (
        <TranslatorContext.Provider value={{language, setLanguage}}>
            <div className='app'>
                <Header />

                <div className="content">
                    <Introduction />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </TranslatorContext.Provider>
    );
}

export default App;
