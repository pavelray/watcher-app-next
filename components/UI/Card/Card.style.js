import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25vmin;
    border-radius: 8px;
    text-align: left;
  }

  .card-body {
    padding: 5px 10px;
    font-size: 14px;
    &__title {
      font-weight: 700;
      margin-bottom: 5px;
      letter-spacing: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__info {
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    background: $secondary;
  }
`;

export { style };
