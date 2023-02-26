import React from "react";
import "./Right.css";
import { Provider } from "react-redux";
import { store } from "../../../js/reduxToolkit/storeToolkit";
import FaqButton from "./Faq/FaqButton";
import { Outlet } from "react-router-dom";

// import { Route, BrowserRouter } from "react-router-dom";

function Right() {
  return (
    <div>
      <div className="weather_added_location">
        <div className="weather_add_input">Added Locations:</div>
      </div>
      <div className="weather_city_selector">
        <Provider store={store}>
        <Outlet />
        </Provider>
      </div>
      <FaqButton />
    </div>
  );
}

export default Right;
