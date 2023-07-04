import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Box } from "./components/Box/Box";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Box width={1500} mx="auto">
      <Header />
      <HomePage />
      <Footer />
    </Box>
  );
}

export default App;
