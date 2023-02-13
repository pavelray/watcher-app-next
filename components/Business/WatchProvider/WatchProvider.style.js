import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/mixins";

  .provider {
    margin-top: 35px;
    cursor: pointer;

    @include mobile {
      margin-top: 15px;
    }
    @include mobile-landscape {
      margin-top: 15px;
    }

    &-title {
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-weight: bold;
    }

    &-logo {
      margin-top: 10px;
    }

    &-logo:not(:first-child) {
      margin-left: 10px;
    }

    &-not-available {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    &-logo-wrapper {
      display: flex;
    }
  }
`;

export { style };
