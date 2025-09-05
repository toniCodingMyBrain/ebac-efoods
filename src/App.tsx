import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Cart from "./domain/cart/components/Cart";
import { PersistGate } from "redux-persist/integration/react";

// Todo 1: Adicionar reset de valores ao clicar em retornar ao step 1.
// Todo 2: Adicionar a máscara de react-input-mask.
// Todo 3: adicionar botão de incluir (+) mais unidades de um produto diretamente no carrinho.
// Todo 5: colocar os Loaders, com react-spinners (ver no outro projeto)

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
