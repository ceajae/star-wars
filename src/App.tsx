import Background from './common/background';
import Header from './common/header';
import Routes from './routes';
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Background />
            <Header />
            <Routes />
        </div>
    );
}

export default App;
