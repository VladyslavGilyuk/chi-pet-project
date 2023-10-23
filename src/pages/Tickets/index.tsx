import TicketsTable from '../../components/tickets';
import { QueryClient, QueryClientProvider } from 'react-query';
const Tickets = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TicketsTable />
    </QueryClientProvider>
  );
};

export default Tickets;
