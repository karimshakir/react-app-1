import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = ({ lakes }) => (
  <ul>
    {lakes.map(lake => (
      <li key={lake.id}>
        {lake.name} | {lake.city}
      </li>
    ))}
  </ul>
);

export default App;
