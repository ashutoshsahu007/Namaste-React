const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hello World From React"),
    React.createElement("h1", { id: "heading" }, "hello World From React"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);
