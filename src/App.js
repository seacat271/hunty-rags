import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import Box from "./components/Box/Box";

function App() {
  return (
    <Box as="main">
      <Header />
      <HomePage />
    </Box>
  );
}

export default App;
