import React from "react";
import ReactDOM from "react-dom/client";

// core React
// React.createElement => reactElement (JS Object) => HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX -> HTML-like syntax -> (Not an HTML)
// JSX => Parcel => Babel (transpilation job)
// JSX => React.createElement (transpiled) => reactElement (JS Object) => HTMLElement (render)
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
