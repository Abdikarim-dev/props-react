import Footer from "./component/Footer";
import Header from "./component/Header";
import Products from "./components/Products";
import Main from "./component/Main";
import Services from "./component/Services";
import Impacts from "./component/Impacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Main></Main>
      <Services />
      <Impacts />
      <Footer />
    </div>
  );
}

export default App;
