import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a className="heading-top" href="/">
        Dictionary
      </a>
      <div className="container">
        <main>
          <Dictionary defaultKeyword={"yoga"} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
