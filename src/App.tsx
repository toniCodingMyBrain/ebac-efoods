import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <PageRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
