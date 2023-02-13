import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .reviews {
    gap: 10px;
    display: flex;
    flex-direction: column;

    .heading {
      font-size: 25px;
      text-align: left;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      word-spacing: 5px;

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
    }
  }
`;

export { style };
