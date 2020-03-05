import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const lakeList2 = [{ id:1, name:"lake1", city:"town1"},
                    {id:2, name:"lake2", city:"town2"},
                    {id:3, name:"lake3", city:"town3"}
                ];

ReactDOM.render(<App lakes={lakeList2} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
