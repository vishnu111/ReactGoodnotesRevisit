import Header from "./components/HeaderC.js";
import Middle from "./components/Middle.js";
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("this executes everytime");
  });
  useEffect(() => {
    console.log("this executes on first load");
  }, []);
  useEffect(() => {
    console.log("this executes on change of count variable");
  }, [count]);
  return (
    <div>
      <Header color="red" />
      <h1>This is the home page.{count}</h1>
      <Middle />
    </div>
  );
}
const namedTest = 10;

//This is called the named export, we can use it as many times
export { namedTest };

//This is called default export, we have to use only one time in a file
export default App;
