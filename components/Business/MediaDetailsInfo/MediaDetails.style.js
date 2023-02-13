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

      @include mobile {
        font-size: 1rem;
        margin: 0.5rem 0;
      }
      @include mobile-landscape {
        font-size: 1rem;
        margin: 0.5rem 0;
      }

      label {
        font-weight: 600;
        font-size: 18px;
      }
      .genre-container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .genre {
        display: flex;
        margin: 0;
        padding: 0;
        margin-left: 5px;
        li {
          color: $tertiary;
          cursor: pointer;
          margin: 3px 4px;
          list-style: none;
          font-size: 16px;
          margin-right: 6px;
          font-weight: 600;
          word-spacing: 4px;
          letter-spacing: 2px;

          &:hover {
            border-bottom: 1px solid $tertiary;
          }
        }
      }
    }
  }
`;

export { style };
