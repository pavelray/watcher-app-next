import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .page-container {
    padding: 0px 20px;
  }

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

        .social-icons {
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
      }

      &-details {
        font-size: 18px;
        letter-spacing: 2px;
        word-spacing: 2px;
        font-weight: 200;
      }
    }
  }
  .person-work {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin: 50px 0px;
  }
`;

export { style };
