import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./page/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
