import {QueryClient,QueryClientProvider} from 'react-query';
import Users from './components/Users';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;