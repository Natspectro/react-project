import { useState } from "react";

const Home = () => {
  // let name = "Shirahoshi";
  const [name, setName] = useState("Nathan");
  const [age, setAge] = useState(32);
  const handleClick = () => {
    setName("Janice");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
