import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const success = (location) => {
      console.log(location);
    };

    const failure = (err) => {
      console.log(err);
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, failure);
    }
  }, []);

  return (
    <div>
      <h1>Your React App</h1>
    </div>
  );
};

export default App;
