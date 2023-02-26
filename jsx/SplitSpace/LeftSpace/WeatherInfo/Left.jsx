import React, { useState } from "react";
import "./Left.css";
import Now from "./Tabs/Now";
import Details from "./Tabs/Detail";
import { store } from "../../../../js/reduxToolkit/storeToolkit";
import { Provider } from "react-redux";


function Left(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="info">
      <Provider store={store}>
        <Now
          className={
            toggleState === 1 ? "weather_block_active" : "weather_block_none"
          }
        />

        <Details
          className={
            toggleState === 2 ? "weather_block_active" : "weather_block_none"
          }
        />
      </Provider>
      <div className="weather_selector">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "weather_tab:active" : "weather_tab"}
        >
          Now
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "weather_tab:active" : "weather_tab"}
        >
          Details
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "weather_tab:active" : "weather_tab"}
        >
          Forecast
        </div>
      </div>
    </div>
  );
}

export default Left;
