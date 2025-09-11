import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Cart from "./domain/cart/components/Cart";
import { PersistGate } from "redux-persist/integration/react";
import { BarLoader } from "react-spinners";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<BarLoader height={10} color="#E66767" />} persistor={persistor}>
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
