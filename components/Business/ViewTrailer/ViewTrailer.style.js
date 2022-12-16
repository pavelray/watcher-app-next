import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .video-container {
    margin-top: 30px;
    h2 {
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 5px;
    }

    &-cta-btn {
      border: none;
      padding: 10px;
      background: $primary;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;

      &:hover {
        cursor: pointer;
        background: $primary-dark;
      }
    }
  }

  .video-frame {
    width: 100%;
    height: 640px;

    @include for-phone-only {
      height: 250px;
    }
  }
`;

export { style };
