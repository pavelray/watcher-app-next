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
    @include mobile {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 10px;
      place-items: center;
      justify-content: center;
      align-content: stretch;
      align-items: center;
      justify-items: center;
    }
    @include mobile-landscape {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      place-items: center;
      justify-content: center;
      align-content: stretch;
      align-items: center;
      justify-items: center;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
`;

export { style };
