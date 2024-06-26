import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .page-container {
    padding: 0px 20px;
    @include mobile {
      padding: 0px 5px;
    }
    @include mobile-landscape {
      padding: 0px 5px;
    }
  }

  .details-container {
    display: flex;
    gap: 30px;

    @include mobile {
      flex-direction: column;
    }
    @include mobile-landscape {
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
        white-space: pre-line;

        @include mobile {
          font-size: 16px;
        }
        @include mobile-landscape {
          font-size: 16px;
        }
      }
    }
  }
  .person-work {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin: 50px 0px;
  }

  .nav {
    margin: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-buttons {
      height: 8vmin;
      width: 20vmin;
      font-size: 18px;
      border: none;
      box-shadow: none;
      background: none;
      color: $primary;
      cursor: pointer;
      text-transform: uppercase;

      @include mobile {
        width: auto;
        gap: 15px;
      }
      @include mobile-landscape {
        width: auto;
        gap: 10px;
      }

      &:hover {
        color: $tertiary;
      }
    }
    .active {
      color: $tertiary;
      border-bottom: 2px solid $tertiary;
    }
  }

  .wrapper {
    padding: 20px;
    @include mobile {
      padding: 0px;
    }
    @include mobile-landscape {
      padding: 0px;
    }
  }

  .title {
    margin: 10px 0px;
    font-size: 2rem;
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vmin;
    user-select: none;
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.1s;
    opacity: 0;

    .image {
      position: relative;
      width: 25vmin;
      height: 35vmin;
      object-fit: cover;
      object-position: 100% center;

      &:hover {
        animation: zoomIn 1s ease-out forwards;
        animation-delay: 1s;
      }

      @keyframes zoomIn {
        100% {
          transform: scale(1.05);
        }
      }
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
  .credits-container {
    .credits {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        border-bottom: 1px solid $background2;
        padding: 10px;
        display: flex;
        align-items: center;
      }
      .image{
        margin-left: 20px;
      }
      .year {
        font-weight: 600;
      }
      .move-title {
        margin-left: 20px;
      }

      .charecter {
        margin-left: 8px;
        color: $secondary;
      }
      .episode-count{
        margin-left: 10px;
        opacity: .7;
      }
    }
  }
`;

export { style };
