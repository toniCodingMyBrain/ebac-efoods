import { HomeBanner } from "./components/banner";
import { Footer } from "./components/footer";
import { GlobalCss } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalCss />
      <HomeBanner />
      <div className="container">
        <h3>Hello World</h3>
      </div>
      <Footer />
    </>
  );
}

export default App;
