import "./styles.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src={require("./images/sunflower2.jpg").default} />
    </div>
  );
}

export default App;
