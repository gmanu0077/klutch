import Credit from "./COMPONENT/credit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2 className="symbol">Klutch</h2>
      </div>
      <Credit />
    <div className="news"><h2>News</h2></div>
    <div className="live"><h2>Live matches</h2>
    </div>
    </div>
  );
}

export default App;
