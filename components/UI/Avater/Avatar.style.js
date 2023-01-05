import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  .avatar {
    align-items: center;
    display: flex;
    line-height: 1.4;
    margin: auto;

    &__name {
      margin-top: 10px;
      letter-spacing: 1px;
      color: #1CD6CE;
      font-size: .8rem;
    }

    &__role {
      font-weight: 400;
      color: #EEEEEE;
      font-size: 1rem;
    }
  }
`;

export { style };
