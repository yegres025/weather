import "./App.css";
import React from "react";
import HeaderInput from "../HeaderInput/HeaderInput";
import WrapperForSplit from "../WrapperForSplit/WrapperForSplit";
import { store } from "../../js/reduxToolkit/storeToolkit";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <HeaderInput />
        <WrapperForSplit />
      </Provider>   
    </div>
  );
}

export default App;
