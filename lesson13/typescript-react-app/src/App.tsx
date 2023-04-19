import { useState, useEffect, useCallback } from "react";
import "./App.css";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log('mounting')
    console.log("Users: ", users)
    return () => console.log("unmounting")
  }, [users])

  con

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>  
    </div>
  );
}

export default App;
