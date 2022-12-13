import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .details-container {
    display: flex;
    gap: 30px;

    @include for-phone-only {
      flex-direction: column;
    }
    .person {
      &-image-wrapper {
      }

      .image {
      }

      .span {
        font-weight: bold;
      }

      &-info-wrapper {
      }

      &-title {
      }

      &-info {
        font-size: 18px;
        letter-spacing: 2px;
        margin: 10px 0;
      }

      &-details {
        font-size: 18px;
        letter-spacing: 2px;
        word-spacing: 2px;
        font-weight: 200;
      }
    }
  }
`;

export { style };
