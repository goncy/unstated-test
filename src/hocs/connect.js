import React from "react";
import {Subscribe} from "unstated";

export default _models => component =>
  function Connect(props) {
    return (
      <Subscribe to={Object.values(_models)}>
        {(...models) => React.createElement(component, {models, ...props})}
      </Subscribe>
    );
  };
