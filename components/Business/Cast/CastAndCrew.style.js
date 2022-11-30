import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .cast-wrapper {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    .cast {
      display: flex;
      flex-direction: row;
      @include for-phone-only {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 70px;
      }
    }
    .cast-title {
      font-size: 1.6rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      letter-spacing: 0.2rem;
    }

    &:not(:first-child) {
      margin: 6rem 0;
    }
  }
`;

export { style };
