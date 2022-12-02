import "./App.css";
import Exercise1 from "./Components/Exercise1/Exercise1";
import Exercise2 from "./Components/Exercise2/Exercise2";
import Exercise3 from "./Components/Exercise3/Exercise3";
import Exercise4 from "./Components/Exercise4/Exercise4";

function App() {
  return (
    <main className="mainContainer">
      <header className="App-header">
        <p>ITUNES API</p>
      </header>
      <section className="exerciseOutlet">
        {" "}
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
      </section>
    </main>
  );
}

export default App;
