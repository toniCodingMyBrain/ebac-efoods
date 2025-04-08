import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <PageRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
