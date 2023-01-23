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
      white-space: pre-line;    
      word-break: break-all;
    }
    &-author {
      font-size: 18px;
      letter-spacing: 2px;
      word-spacing: 5px;
      margin: 5px 0px;
      font-weight: bold;
      font-family: 'Crete Round', serif;
      color: $secondary;
    }
    &-stats {
      margin: 5px 0px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      font-family: 'Crete Round', serif;
      color: $secondary;

      .date {
        font-size: 15px;
        font-weight: normal;
        letter-spacing: 1px;
        margin: 5px 0px;
        font-family: 'Crete Round', serif;
        color: $secondary
      }
    }
  }
`;

export { style };
