import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <main>
          <Dictionary defaultKeyword={"marvelous"} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
