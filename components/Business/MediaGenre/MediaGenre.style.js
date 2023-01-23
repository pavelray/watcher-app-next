import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .media-genre-container {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0px;

    @include mobile {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      grid-auto-rows: minmax(20px, auto);
    }

    .media-genre {
      color: $primary;
      letter-spacing: 1px;
      padding-bottom: 5px;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #293462;
        margin: -2px;
        overflow: hidden;
      }
    }
  }
`;

export { style };
