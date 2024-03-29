import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .heading {
    font-size: 35px;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin: 20px 0px;
    text-shadow: 2px 2px 1px $secondary;

    @include mobile {
      font-size: 18px;
      letter-spacing: 1px;
      word-spacing: 2px;
    }
    @include mobile-landscape {
      font-size: 18px;
      letter-spacing: 1px;
      word-spacing: 2px;
    }

    @include tablet {
      font-size: 20px;
    }
  }

  .subheading {
    font-size: 22px;
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 5px;
    text-shadow: 2px 2px 1px $secondary;

    @include mobile {
      font-size: 18px;
      letter-spacing: 1px;
      word-spacing: 2px;
    }
  }
`;

export { style };
