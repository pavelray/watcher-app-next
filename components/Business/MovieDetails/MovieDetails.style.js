import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie-details-container {
    position: relative;
    display: flex;
    padding: 20px;
    margin-bottom: 5rem;

    @include mobile {
      padding: 10px;
      margin-top: 8rem;
    }
    @include mobile-landscape {
      padding: 10px;
      padding-top: 1rem;
    }
    @include tablet {
      min-height: auto;
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

        @include tablet {
          gap: 1rem;
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
                font-size: 1rem;
                color: $secondary;
              }
              .warning{
                background: $warning;
                padding: 2px 5px;
                color: $primary;
                font-size: 1rem;
              }
              .info{
                background: $info;
                padding: 2px 5px;
                color: $primary;
                font-size: 1rem;
              }
              font-size: 1rem;
              margin: 1rem 0;
              @include mobile {
                font-size: 1rem;
              }
              @include mobile-landscape {
                font-size: 1rem;
              }
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
      padding: 5px;
    }
    @include mobile-landscape {
      padding: 5px;
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
          z-index: 12;
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
      margin: 0;
      padding: 5px;
    }

    @include mobile-landscape {
      margin: 0;
      padding: 5px;
    }
  }

  .video-frame {
    width: 100%;
    height: 80vh;
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
