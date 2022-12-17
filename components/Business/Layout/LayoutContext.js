import constate from "constate";
import {
  setLocationCookie,
  setLocationInfo,
} from "../../../utils/helperMethods";

function useLayout({ location, isMobileView }) {
  const layoutContext = {
    location,
    isMobileView,
  };

  if (location) {
    setLocationInfo(location);
    setLocationCookie(location);
  }

  return { layoutContext };
}

const [LayoutProvider, useLayoutContext] = constate(useLayout);

export { LayoutProvider, useLayoutContext };
