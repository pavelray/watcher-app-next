/* eslint-disable react/display-name */
import React from "react";

export const useWithContext = (WrappedComponent, Context) => (props) => {
  return (
    <Context.Consumer>
      {(contextValue) => <WrappedComponent {...props} {...contextValue} />}
    </Context.Consumer>
  );
};




