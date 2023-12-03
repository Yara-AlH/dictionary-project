import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading-top">Dictionary</div>
      <div className="container">
        <main>
          <Dictionary defaultKeyword={"yoga"} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
