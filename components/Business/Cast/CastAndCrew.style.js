import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .cast-wrapper {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    .cast {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 20px;
      @include for-phone-only {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
      @include for-tablet-portrait-up {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .cast-title {
      font-size: 1.6rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      letter-spacing: 0.1rem;

      .view-all {
        margin-left: 15px;
        font-size: 12px;
        letter-spacing: 0rem;
        color: #FFD369;
        &:hover {
          cursor: pointer;
          color: #FFC600;
        }
      }
    }

    &:not(:first-child) {
      margin: 2rem 0;
    }
  }
`;

export { style };
