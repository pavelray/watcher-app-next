import css from "styled-jsx/css";

const style = css`
  @import "../../styles/colors";
  @import "../../styles/mixins";

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &-title {
      font-size: 65px;
      font-family: "Pacifico", cursive;
    }
    &-sub-heading {
      text-transform: capitalize;
      letter-spacing: 0.2rem;
    }
    &-body {
      text-align: center;
      letter-spacing: 0.1rem;
      word-spacing: 0.2rem;
    }

    .coffee {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      justify-content: center;
      font-weight: bold;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      a {
        color: inherit;
        text-decoration: none;
        margin-right: 10px;
        letter-spacing: 1px;
      }

      &:hover {
        background-color: $primary;
      }
    }
  }
`;

export { style };
