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
      color: $secondary;
    }
    &-stats {
      margin: 5px 0px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      color: $secondary;

      .date {
        font-size: 15px;
        font-weight: normal;
        letter-spacing: 1px;
        margin: 5px 0px;
        color: $secondary;
      }
    }
    .read-more{
      border: none;
      background: $background;
      color: $tertiary;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 12px;
      padding: 0;
     
      &:hover {
        cursor: pointer;
        border-bottom: 1px solid $tertiary;
      }
    }
  }

  [data-expandable] [data-expand-text] {
    --line-height: 1.5;
    --lines-to-show: 3;
    position: relative;
    box-sizing: border-box;
    line-height: var(--line-height);
    overflow: hidden;
    height: calc(var(--line-height) * var(--lines-to-show) * 1em);

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: linear-gradient(to bottom, transparent, #fff);
    }
  }

  [data-overflow="false"] [data-expand-text] {
    height: initial;
    &::before {
      background: initial;
    }
  }

  [data-expandable].expanded [data-expand-text] {
    height: initial;
    &::before {
      background: initial;
    }
  }

  [data-overflow="false"] [data-expand-button] {
    display: none;
  }
`;

export { style };
