import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    text-align: left;
    width: 200px;

    @include mobile {
      flex: 1 1 150px;
      width: 150px;
    }
    @include mobile-landscape {
      flex: 1 1 150px;
      width: 150px;
    }
  }

  .card-body {
    padding: 5px 10px;

    &__title {
      font-weight: 500;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1rem;
    }
    &__info {
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__genre {
      font-size: 0.75rem;
      opacity: 0.7;
      margin: 5px 0px;
    }
  }

  .card-footer {
    display: flex;
    padding: 5px;
  }

  .card-btn-cta {
    border: none;
    padding: 10px;
    color: $primary;
    background: $primary;
    width: 100%;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .warning {
    background: $warning;
    position: absolute;
    display: flex;
    padding: 5px;
    z-index: 2;
  }

  .card-btn-cta:hover {
    cursor: pointer;
    background: $secondary;
  }
`;

export { style };
