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
      background-color: $background-color-light;
    }

    &__main {
      position: relative;
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

  .recomended-container{
    margin: 0px 50px;

    @include for-phone-only {
      margin: 0px 10px;
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
