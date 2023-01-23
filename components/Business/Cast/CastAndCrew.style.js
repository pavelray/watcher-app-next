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
      @include mobile {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
      @include tablet {
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
        color: $tertiary;
        &:hover {
          cursor: pointer;
          border-bottom: 1px solid $tertiary;
        }
      }
    }

    &:not(:first-child) {
      margin: 2rem 0;
    }
  }
`;

export { style };
