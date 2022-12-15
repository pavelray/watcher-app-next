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
      background-color: $dark-background;
    }

    &__main {
      position: relative;
      color: $color;
      margin-top: 10rem;
      padding: 0 6rem;

      @include for-phone-only {
        margin-top: 1rem;
        padding: 0 0.2rem;
        width: 100%;
      }

      &-content {
        display: flex;
        gap: 5rem;

        @include for-phone-only {
          display: flex;
          flex-direction: column;
        }

        .movie-details-image {
          margin: 1rem 0;

          .image {
            padding: 5px;
            border: 5px solid $primary-dark;
            text-align: center;
          }
        }

        .movie-details-content {
          &__row {
            @include for-phone-only {
              display: flex;
              flex-direction: column;
            }
            .title {
              font-size: 2.5rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5rem;
              margin: 1rem 0;
              color: $primary;
              @include for-phone-only {
                font-size: 1.5rem;
                margin: 0.5rem 0;
              }
            }
            .tagline {
              color: $primary;
              font-weight: 700;
              margin: 0.4rem 0;
            }
            .stats {
              font-size: 1.5rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              margin: 1rem 0;
              color: $primary-dark;
              &__genre {
                font-weight: 700;
                font-size: 0.8rem;
                letter-spacing: 0.2rem;
                word-spacing: 0.3rem;
                text-transform: uppercase;
                margin-left: 1rem;
              }
              &__other {
                font-size: 1rem;
                font-weight: 700;
                letter-spacing: 0.2rem;
                &:not(:first-child) {
                  margin-left: 1rem;
                }
              }
              @include for-phone-only {
                font-size: 1rem;
                margin: 0.5rem 0;
              }
            }

            .info {
              margin: 10px 0;
              font-size: 1.2rem;
              font-weight: 400;
              letter-spacing: 2px;
              word-spacing: 2px;
              color: $primary-dark;
              &-label {
                color: $primary;
                font-weight: 800;
              }
            }
            
            .description {
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

  .similar-movies {
    margin: 0px 50px;

    @include for-phone-only {
      margin: 0px 10px;
    }
  }
`;

export { style };
