import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie-details-container {
    position: relative;
    min-height: 100vh;
    display: flex;
    padding: 20px;

    @include for-phone-only {
      padding: 10px;
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
      @include for-phone-only {
        margin-top: 1rem;
        padding: 0 0.2rem;
        width: 100%;
      }

      &-content {
        display: flex;
        gap: 5rem;
        flex-wrap: wrap;

        @include for-phone-only {
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
        }

        .movie-details-content {
          flex: 3;
          &__row {
            @include for-phone-only {
              display: flex;
              flex-direction: column;
            }

            .description {
              .title {
                font-size: 1.25rem;
                color: #ffd369;
                margin: 8px 0px;
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

    &-buttons {
      height: 8vmin;
      width: 20vmin;
      font-size: 18px;
      border: none;
      box-shadow: none;
      background: none;
      color: #eeeeee;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        color: #ffd369;
      }
    }
    .active {
      color: #ffd369;
      border-bottom: 2px solid #ffd369;
    }
  }

  .wrapper {
    padding: 20px;
  }

  .title{
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
    }
  }

  .review-container {
    opacity: 0;
    padding: 20px;
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.1s;
  }

  .recomended-container {
    padding: 20px;

    @include for-phone-only {
      margin: 0px 10px;
    }
  }

  .video-frame {
    width: 100%;
    height: 640px;
    border: none;
    @include for-phone-only {
      height: 250px;
    }
  }
  .similar-movies {
    margin: 0px 50px;

    @include for-phone-only {
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
