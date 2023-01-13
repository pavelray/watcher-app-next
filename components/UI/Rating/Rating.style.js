import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .rating {
    width: 7.3rem;
    height: 1.2rem;
    background-image: url("/images/stars.png");
    background-repeat: no-repeat;
    background-size: auto 100%;

    &-image {
      height: 100%;
      background-image: url("/images/stars-filled.png");
      background-repeat: no-repeat;
      background-size: auto 100%;
    }
  }
`;
export { style };
