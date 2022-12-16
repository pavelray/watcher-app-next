import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie-details {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &-stats {
      font-size: 1.1rem;
      margin: 0.3rem 0;
      letter-spacing: 0.1rem;
      font-weight: 400;
      line-height: 25px;

      @include for-phone-only {
        font-size: 1rem;
        margin: 0.5rem 0;
      }

      label {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
`;

export { style };
