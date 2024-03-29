import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .slide-container {
    padding: 50px 0px;
    &__title--wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__sub {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      word-spacing: 3px;
      font-size: 14px;

      &:hover {
        cursor: pointer;
      }
    }
    &__scroll-wrapper {
      overflow: hidden;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        width: 30px;
      }
      &::-webkit-scrollbar * {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: #41f0d1 !important;
      }
    }
    &__content {
      display: flex;
      gap: 15px;
      margin-bottom: 10px;
    }
  }
`;

export { style };
