import { QueryClient, QueryClientProvider } from 'react-query'
import Background from './common/background';
import Header from './common/header';
import Routes from './routes';

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Background />
            <Header />
            <Routes />
        </QueryClientProvider>
    );
}

export default App;
