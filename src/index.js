import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
