import React from "react";
import ReactDOM from "react-dom";

const nestedElements = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
  ]
);
// This is not readable at all, but this is core react
// Later on we will use JSX to create element
console.log(nestedElements);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElements);
