import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .btn-primary {
    width: 25%;
    font-size: 0.8rem;
    padding: 8px 8px;
    border: none;
    box-shadow: none;
    background-color: $tertiary;
    color: $primary;
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
    &:hover:active {
      transform: scale(0.98);
      cursor: pointer;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      filter: drop-shadow(0.05rem 0.1rem 0.2rem black);
    }
  }
`;

export { style };
