import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie-details-container {
    position: relative;
    min-height: 100vh;
    display: flex;
    padding: 20px;

    @include mobile {
      padding: 10px;
      margin-top: 8rem;
    }
    @include mobile-landscape {
      padding: 10px;
      padding-top: 1rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    &__main {
      position: relative;
      @include mobile {
        margin-top: 1rem;
        padding: 0 0.2rem;
        width: 100%;
      }
      @include mobile-landscape {
        margin-top: 1rem;
        padding: 0 0.2rem;
        width: 100%;
      }

      &-content {
        display: flex;
        gap: 5rem;
        flex-wrap: wrap;

        @include mobile {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
        }
        @include mobile-landscape {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
        }

        .movie-details-image {
          margin: 1rem 0;
          flex: 1;

          .image {
            padding: 5px;
            text-align: center;
          }

          .icons {
            margin-top: 10px;
          }

          @include mobile {
            display: none;
          }
          @include mobile-landscape {
            display: none;
          }
        }

        .movie-details-content {
          flex: 3;
          &__row {
            @include mobile {
              display: flex;
              flex-direction: column;
            }

            @include mobile-landscape {
              display: flex;
              flex-direction: column;
            }

            .description {
              .title {
                font-size: 1.25rem;
                color: $secondary;
                margin: 8px 0px;
                font-family: "Crete Round", serif;
              }
              font-size: 1.2rem;
              letter-spacing: 0.1rem;
              word-spacing: 0.3rem;
              margin: 1rem 0;
            }

            .no-trailer {
              font-size: 1rem;
              letter-spacing: 0.1rem;
              word-spacing: 0.3rem;
              margin: 2rem 0;
            }
          }
        }
      }
    }
  }
  .nav {
    margin: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include mobile {
      justify-content: space-evenly;
    }

    @include mobile-landscape {
      justify-content: space-evenly;
    }

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
      font-family: "Crete Round", serif;
      letter-spacing: 2px;

      @include mobile {
        width: auto;
      }
      @include mobile-landscape {
        width: auto;
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
      padding: 0px 10px;
    }
    @include mobile-landscape {
      padding: 0px 10px;
    }
  }

  .title {
    margin: 10px 0px;
    font-size: 2rem;
  }

  .episode-number {
    font-size: 0.9rem;
    margin-left: 20px;
    letter-spacing: 1px;
  }

  .season-select {
    padding: 0.8rem 2rem 0.8rem 1.5rem;
    font-size: 1rem;
    color: $primary;
    background: $background2
      url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDMwIDYwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTE1LjY3NiAzMy4wMzdsNS4xMDItNS4xMDMtLjcwNy0xLjA4Ni00LjQ5IDQuNDkyLTQuNDktNC40OTItLjcwMiAxLjA4NiA1LjEwMiA1LjEwMy4wNzUuMTE1LjAyLS4wMi4wMi4wMnoiLz48L3N2Zz4K)
      no-repeat 100% 45%;
    background-size: 30px 60px;
    border-color: $background2;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .media-title {
    color: $secondary;
  }
  .episode-number {
    color: $secondary;
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
        animation-delay: 0.1s;
      }

      @keyframes zoomIn {
        100% {
          transform: scale(1.05);
        }
      }
    }
  }
  .media-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vmin;
    user-select: none;

    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.1s;

    .media {
      &-image {
        position: relative;
        width: 45vmin;
        height: 25vmin;
        object-fit: cover;
        object-position: 100% center;

        .icon-play {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 2;
          transform: translate(-50%, -50%);
          font-size: 4rem;

          &:hover {
            cursor: pointer;
          }
        }
      }

      &-title {
        margin: 5px 0px;
        font-size: 1rem;
      }

      &-description {
        width: 40vmin;
      }
    }
  }

  .review-container {
    opacity: 0;
    padding: 20px;
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.1s;

    @include mobile {
      padding: 0px;
    }
    @include mobile-landscape {
      padding: 0px;
    }
  }

  .recomended-container {
    padding: 20px;

    @include mobile {
      margin: 0px 10px;
      padding: 0px;
    }
    @include mobile-landscape {
      margin: 0px 10px;
      padding: 0px;
    }
  }

  .video-frame {
    width: 100%;
    height: 640px;
    border: none;
    @include mobile {
      height: 250px;
    }
    @include mobile-landscape {
      height: 250px;
    }
  }
  .similar-movies {
    margin: 0px 50px;

    @include mobile {
      margin: 0px 10px;
    }
    @include mobile-landscape {
      margin: 0px 10px;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
`;

export { style };
