import './App.scss';
import Introduction from './content/introduction/Introduction';
import Header from './content/Header/Header';

function App() {
    return (
        <div className='app'>
            <Header></Header>
            <Introduction></Introduction>
        </div>
    );
}

export default App;
