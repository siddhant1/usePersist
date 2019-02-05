import { debounce } from "lodash";
import React from "react";
import "./App.css";
import usePersist from "./CustomHooks/usePersist";
function App() {
  const [data, setData] = usePersist(1);
  return (
    <div className="flex">
      <button
        className="btn btn-success btn-circle btn-xl"
        onClick={() => setData(data - 1)}
      >
        -
      </button>
      <div>{data}</div>
      <button
        className="btn btn-success btn-circle btn-xl"
        onClick={() => setData(data + 1)}
      >
        +
      </button>
    </div>
  );
}
export default App;
