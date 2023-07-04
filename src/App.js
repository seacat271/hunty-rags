import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import Box from "./components/Box/Box";

function App() {
  return (
    <Box as="main" width={1280} mx="auto">
      <Header />
      <HomePage />
    </Box>
  );
}

export default App;
