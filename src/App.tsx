import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";
import { RestaurantsProvider } from "./api/context/restaurants-context-function";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RestaurantsProvider>
        <PageRoutes />
      </RestaurantsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
