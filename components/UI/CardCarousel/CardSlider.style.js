import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .slide-container {
    margin: 0px 0px;
    padding: 50px 0px;
    &__title--wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    &__title {
      font-size: 25px;
      text-align: left;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: $primary;
      word-spacing: 5px;

      @include for-phone-only {
        font-size: 18px;
        letter-spacing: 1px;
        word-spacing: 2px;
      }
    }
    &__sub {
      color: $primary;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      word-spacing: 3px;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        color: $color;
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
        background: #343434 !important;
      }
    }
    &__content {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;
    }
  }
`;

export { style };
