/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm a h1 tag</h1>
 *      <h2>I'm a h2 tag<h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm a h1 tag</h1>
 *      <h2>I'm a h2 tag<h2>
 *  </div>
 * </div>
 *
 */

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
