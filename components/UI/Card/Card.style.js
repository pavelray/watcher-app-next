import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    border-radius: 8px;
    text-align: left;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: $background-color-primary;

    @include for-phone-only {
      width: 160px;
    }
  }

  .card-body {
    padding: 5px 10px;
    font-size: 14px;
    &__title {
      font-weight: 700;
      margin-bottom: 5px;
      letter-spacing: 1px;
    }
    &__info {
      font-weight: 600;
      display: flex;
      justify-content: space-between;
    }

    &__genre {
      font-size: 12px;
      font-weight: 200;
      margin: 5px 0px;
      letter-spacing: 1px;
    }
  }

  .card-footer {
    display: flex;
    padding: 5px;
  }

  .card-btn-cta {
    border: none;
    padding: 10px;
    color: $text-color-primary;
    background: $primary;
    width: 100%;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .card-btn-cta:hover {
    cursor: pointer;
    background: $primary-dark;
  }
`;

export { style };
