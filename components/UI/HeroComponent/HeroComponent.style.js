import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .hero-container {
    width: 100%;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
    color: $background-color-primary;
    &-image__container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background: rgb(20, 20, 20);
      background: linear-gradient(
        to left top,
        rgba(20, 20, 20, 1) 0%,
        rgba(255, 255, 255, 0) 56%
      );
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 0px 30px;
      text-align: left;

      &-title {
        margin: 0px;
        font-weight: 600;
        font-size: 45px;
        text-shadow: 5px 5px 10px black;
        &:hover {
          cursor: pointer;
          color: $primary;
          text-shadow: 1px 1px 0px $background-color-primary;
        }
      }

      &-details {
        margin: 0px;
        font-weight: 400;
        font-size: 18px;
        text-shadow: 2px 2px 1px black;
        padding: 25px 0px;
        width: 50%;
      }
    }
  }
`;

export { style };
