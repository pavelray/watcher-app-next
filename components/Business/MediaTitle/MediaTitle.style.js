import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    &-tagline {
      font-weight: 400;
      margin: 5px 0;
      font-style: italic;
    }
    .genre-text {
      font-style: normal;
      font-size: 18px;
      font-weight: 600;
      word-spacing: 4px;
      letter-spacing: 2px;
    }

    &-gen {
      display: flex;
      margin: 10px 0px;
      padding: 0px;

      .genre {
        border-bottom: 1px solid #fedb39;
        cursor: pointer;
        padding: 3px 4px;
      }

      li {
        list-style: none;
        font-size: 16px;
        width: auto;
        float: left;
        margin-right: 6px;
        font-weight: 600;
        word-spacing: 4px;
        letter-spacing: 2px;
      }
    }
  }
`;

export { style };
