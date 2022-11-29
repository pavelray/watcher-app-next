import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .season-tabs {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;

    @include for-phone-only {
      overflow: hidden;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar * {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: #343434 !important;
      }
    }

    .tabs {
      padding: 10px;
      font-size: 18px;
      border-bottom: 1px solid $primary-dark;
      cursor: pointer;
      color: $color;
    }

    .tabs-active {
      font-weight: 600;
      background-color: $primary-darker;
      border-bottom: 2px solid $primary;
    }
  }

  .season-container {
    display: flex;
    flex-direction: column;
    margin: 0px 50px;
    padding: 50px 0px;
  }

  .tab {
    display: none;
  }
  .active {
    display: block;
  }

  .season-wrapper {
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    gap: 20px;

    &::-webkit-scrollbar {
      width: 30px;
    }
    &::-webkit-scrollbar * {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #343434 !important;
    }

    .media-card {
      height: 372px;
      &__title {
        margin: 10px 0;
        font-size: 16px;
        font-weight: 600;
        color: $color;
        display: flex;
        justify-content: space-between;
      }

      &__body {
        font-size: 14px;
        font-weight: 400;
        color: $color;

        p {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box !important;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          white-space: normal;
        }
      }
    }
  }
`;

export { style };
