import createContainer from "constate";
import { setLocationCookie, setLocationInfo } from "../../../utils/helperMethods";

export const LayoutContext = createContainer(({ location, isMobileView }) => {
  const layoutContext = {
    location,
    isMobileView
  };

  if (location) {
    setLocationInfo(location);
    setLocationCookie(location);
  }

  return { layoutContext };
});
