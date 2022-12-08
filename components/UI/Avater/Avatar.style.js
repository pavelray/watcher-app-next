import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  .avatar {
    align-items: center;
    color: $color;
    display: flex;
    line-height: 1.4;
    margin: auto;

    &__name {
      margin-top: 10px;
      font-weight: 200;
      letter-spacing: 1px;
    }

    &__role {
      font-weight: 400;
      color: $primary;
    }
  }
`;

export { style };
