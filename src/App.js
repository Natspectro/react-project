import "./App.css";

function App() {
  const title = "Welcome to my blog";
  const likes = 20;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{10}</p>
        <p>{Math.random() * 10}</p>
        <p>{"Hello guys!"}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
