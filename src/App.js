import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Box } from "./components/Box/Box";
import { Footer } from "./components/Footer/Footer";
import { AuthPage } from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <Box width={1500} mx="auto">
      <Header />
      <HomePage />
      <Footer />
      <AuthPage />
    </Box>
  );
}

export default App;
