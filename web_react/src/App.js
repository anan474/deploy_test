import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? (
          <div>
            <code>{JSON.stringify(data)}</code>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
