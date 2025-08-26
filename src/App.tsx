import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { GlobalCss } from "./GlobalStyle";
import PageRoutes from "./routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Cart from "./domains/cart/components/cart";
import { PersistGate } from "redux-persist/integration/react";

// Todo 1: impedir prosseguir no formulário se não houver produtos e se não for preenchido.
// Todo 2: adicionar botão de incluir mais unidades de um produto no carrinho.
// Todo 3: mandar formulário para API e recuperar o número do pedido.

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
