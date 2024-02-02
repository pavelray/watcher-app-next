import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .review {
    border-bottom: 1px solid gray;
    padding: 2px 5px;

    &-header {
      display: flex;
      align-items: baseline;
      flex-direction: column;
    }
    &-description {
      font-size: 0.8rem;
      letter-spacing: 1px;
      word-spacing: 1px;
      margin: 2px 0px;
      white-space: pre-line;
      word-break: break-all;
    }
    &-author {
      align-items: center;
      display: flex;
      gap: 1rem;
      font-size: 1.1rem;
      word-spacing: 2px;
      margin: 2px 0px;
      font-weight: 500;
      color: $secondary;

      span {
        width: 40px;
        height: 40px;
        background: #fff;
        font-size: 1.8rem;
        text-align: center;
      }

      .avater {
        padding: 0px 5px;
      }
    }
    &-stats {
      font-size: 0.9rem;
      margin: 5px 0px;
      font-weight: 500;
      display: flex;
      color: $secondary;
      gap: 1rem;

      .date {
        letter-spacing: 1px;
      }
    }
    .read-more {
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
