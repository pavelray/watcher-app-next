import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie-details {
    list-style-type: none;
    margin: 0;
    padding: 0;
    &-stats {
      display: flex;
      flex-direction: row;
      margin: 0.3rem 0;
      font-weight: 400;
      line-height: 25px;

      .label {
        max-width: 200px;
        flex: 1;
        margin-right: 1.5rem;
      }
      .value {
        flex: 2;
      }

      @include mobile {
        margin: 0.5rem 0;
      }
      @include mobile-landscape {
        margin: 0.5rem 0;
      }

      .genre {
        display: flex;
        margin: 0;
        padding: 0;
        @include mobile {
          display: initial;
        }

        li {
          color: $tertiary;
          cursor: pointer;
          list-style: none;
          margin-right: 6px;
          font-weight: 600;

          &:hover {
            border-bottom: 1px solid $tertiary;
          }
        }
      }
    }
  }
`;

export { style };
