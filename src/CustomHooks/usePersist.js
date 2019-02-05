// eslint-disable-next-line
import React, { useState, useEffect } from "react";

function usePersist(initialState) {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    window.addEventListener(
      "storage",
      function(event) {
        if (event.storageArea === localStorage) {
          const data = localStorage.getItem("data");
          setData(+data);
        }
      },
      false
    );
    return window.removeEventListener("storage",()=>console.log("removed"));
  });

  useEffect(() => {
    localStorage.setItem("data", data);
  }, [data]);
  return [data, setData];
}

export default usePersist;
