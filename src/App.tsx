import './App.scss';
import Introduction from './content/introduction/Introduction';
import Header from './content/Header/Header';
import { Languages, TranslatorContext } from './contexts/TranslatorContext';
import { useState } from 'react';

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
                <Header></Header>
                <Introduction></Introduction>
            </div>
        </TranslatorContext.Provider>
    );
}

export default App;
