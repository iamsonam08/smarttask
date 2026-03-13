import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{fontFamily:"Arial", padding:"40px"}}>
      <h1>SmartTask AI</h1>
      <p>Your app is deployed successfully 🚀</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
