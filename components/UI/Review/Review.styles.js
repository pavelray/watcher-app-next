import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .review {
    border-bottom: 1px solid gray;
    padding: 2px 5px;

    &-header {
      display: flex;
      justify-content: space-between;
    }
    &-description {
      font-size: 14px;
      letter-spacing: 1px;
      word-spacing: 1px;
      margin: 2px 0px;
      font-style: italic;
     
      .quote {
        font-size: 20px;
        line-height: 10px;
        font-weight: bold;
        font-style: italic;
      }
    }
    &-author {
      font-size: 18px;
      letter-spacing: 2px;
      word-spacing: 5px;
      margin: 5px 0px;
      font-weight: bold;
    }
    &-stats {
      margin: 5px 0px;
      font-weight: bold;
      display: flex;
      flex-direction: column;

      .date {
        font-size: 15px;
        font-weight: normal;
        letter-spacing: 1px;
        margin: 5px 0px;
      }
    }
  }
`;

export { style };
