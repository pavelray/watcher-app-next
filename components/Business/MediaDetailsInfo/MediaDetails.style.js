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
      margin: 0.5rem 0;
      color: $primary-dark;
      letter-spacing: 0.1rem;
      font-weight: 400;
    }
  }
`;

export { style };
