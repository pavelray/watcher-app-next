import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .anime-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 1.5rem;
    justify-content: center;
    flex: 0 0 100%;

    .image-wrapper {
      aspect-ratio: 9/16;
    }
    .anime-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export { style };
