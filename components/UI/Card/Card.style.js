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
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    background-color: #343434;

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
    color: white;
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
