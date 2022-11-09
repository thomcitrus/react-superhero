import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./components/home/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
