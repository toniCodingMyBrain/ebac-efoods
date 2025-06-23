import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Cart from "./components/cart";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<h4>Carregando...</h4>} persistor={persistor}>
        <BrowserRouter>
          <GlobalCss />
          <PageRoutes />
          <Footer />
          <Cart />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
