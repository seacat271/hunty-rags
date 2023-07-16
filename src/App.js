import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import { Box } from "./components/Box/Box";
import { Footer } from "./components/Footer/Footer";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { CardsList } from "./components/CardsList/CardsList";

function App() {
  return (
    <Box width={1500} mx="auto">
      <Header />
      <HomePage />
      <Footer />
      <AuthPage />
      <CardsList />
    </Box>
  );
}

export default App;
