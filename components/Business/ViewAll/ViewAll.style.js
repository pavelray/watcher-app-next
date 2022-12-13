import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .view-all-wrapper {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 auto;

    @include for-phone-only {
      grid-column-gap: 8px;
      grid-template-columns: repeat(2, 1fr);
    }

    @include for-tablet-portrait-up {
      grid-template-columns: repeat(3, 1fr);
    }

    @include for-tablet-landscape-up {
      grid-template-columns: repeat(4, 1fr);
    }

    @include for-desktop-up {
      grid-column-gap: 10px;
      grid-template-columns: repeat(5, 1fr);
    }

    @include for-big-desktop-up {
      grid-column-gap: 20px;
      grid-template-columns: repeat(7, 1fr);
    }
  }
`;

export { style };
