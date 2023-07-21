import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from './App';
import './index.css'

ReactDOM.render(
  <SpeechProvider appId="1f0cc004-da66-4c2c-b200-8e2d29ffef4f" language="en-US">
    <Provider>
  <App />
</Provider>

  </SpeechProvider>,

document.getElementById('root')
);