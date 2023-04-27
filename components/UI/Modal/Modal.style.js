import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .modal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;

    &-content {
      background-color: rgba(0, 0, 0, 1);
      margin: auto;
      width: 70%;
      padding: 0px 10px;

      @include mobile {
        width: 90%;
      }
      @include tablet {
        width: 90%;
      }
    }
    /* The Close Button */
    .close {
      color: $secondary;
      float: right;
      font-size: 28px;
      font-weight: bold;

      &:focus,
      &:hover {
        color: $primary;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;

export { style };
