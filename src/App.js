import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to my blog";
  const likes = 20;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
