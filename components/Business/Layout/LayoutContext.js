import createContainer from "constate";
import { setLocationCookie, setLocationInfo } from "../../../utils/helperMethods";

export const LayoutContext = createContainer(({ location }) => {
  const layoutContext = {
    location,
  };

  if (location) {
    setLocationInfo(location);
    setLocationCookie(location);
  }

  return { layoutContext };
});
