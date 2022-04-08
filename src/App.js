import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default App;
