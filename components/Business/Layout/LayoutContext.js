import createContainer from "constate";

export const LayoutContext = createContainer(({ location }) => {
  const layoutContext = {
    location,
  };

  return { layoutContext };
});


