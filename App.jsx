// App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      fontFamily:
        "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    },
    "*,*::after,*::before": {
      boxSizing: "border-box",
    },
    a: {
      WebkitTapHighlightColor: "transparent",
    },
    html: {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "white transparent",
    },
    body: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      placeContent: "center",
      background: "linear-gradient(90deg, #fffbab, #b59501)",
    },
  },
  h1: {
    fontSize: "8vmax",
    color: "#333",
    position: "relative",
    "::before": {
      content: 'attr(data-titulo)',
      position: "absolute",
      top: 0,
      left: 0,
      color: "mediumslateblue",
      overflow: "hidden",
      animationName: {
        "0%": { width: 0 },
        "100%": { width: "100%" },
      },
      animationDuration: "3s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
      animationFillMode: "forwards",
    },
  },
});

function App() {
  return <h1 {...stylex.props(styles.h1)} data-titulo="Loading...">Loading...</h1>;
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <stylex.Style {...stylex.props(styles.global)} />
    <App />
  </React.StrictMode>
);
