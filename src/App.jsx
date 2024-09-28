import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "@/components/ui/button";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Welcome to EasySafar</div>
      <Button>Hey there</Button>
    </>
  );
}

export default App;
