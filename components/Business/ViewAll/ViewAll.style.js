import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .view-all-wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    place-items: center;
    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 786px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export { style };
