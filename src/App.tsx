import { BrowserRouter } from "react-router-dom";
import { HomeBanner } from "./components/banner";
import { Footer } from "./components/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <HomeBanner />
      <div className="container">
        <PageRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
