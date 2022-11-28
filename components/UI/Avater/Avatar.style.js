import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  .avatar {
    display: flex;
    margin: 5px;
    border: 4px solid $primary-dark;
    border-radius: 50%; /* relative value */
    transition: linear 0.25s;
    height: 80px;
    width: 80px;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;

    &__name {
      margin-top: 10px;
    }

    &:hover {
      transition: ease-out 0.2s;
      border: 4px solid $dark;
      cursor: pointer;
    }
  }
`;

export { style };
