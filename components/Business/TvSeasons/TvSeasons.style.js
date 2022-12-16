import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .seasons-container {
    .seasons-wrapper {
      display: flex;
      flex-direction: column;
    }

    .seasons-title {
      margin-bottom: 20px;
      font-size: 25px;
      text-align: left;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      word-spacing: 5px;

      @include for-phone-only {
        font-size: 18px;
        letter-spacing: 1px;
        word-spacing: 2px;
      }
    }

    .seasons-card-wrapper {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
      row-gap: 20px;
      @include for-phone-only {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export { style };
