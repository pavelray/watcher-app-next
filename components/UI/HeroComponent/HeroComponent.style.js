import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .hero {
    height: 70vh;
    position: relative;
    background-repeat: no-repeat;
    background-position: cover;
    background-size: cover;

    @include tablet {
      height: 35vh;
    }

    @include mobile {
      height: 25vh;
    }

    .hero-content {
      height: 100%;
      width: 70vmin;
      display: flex;
      flex-direction: column;
      justify-content: center;
      user-select: none;
      padding: 0px 20px;
      animation: slideUp 1s ease-out forwards;
      animation-delay: 0.1s;

      @include tablet {
        width: 55vmin;
      }

      @include mobile {
        width: 95vmin;
        padding: 0px 10px;
        height: 40vh;
        justify-content: flex-end;
      }

      .title {
        font-size: 2.5rem;
        word-spacing: 2px;
        filter: drop-shadow(0 0 3rem black);
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.1s;
        font-family: "Crete Round", serif;

        @include mobile {
          font-size: 1.5rem;
          word-spacing: 1px;
        }
      }

      .meta {
        display: flex;
        flex-direction: row;
        align-items: center;

        &-values {
          margin: 5px 0px 2px 20px;
          font-size: 0.9rem;
          word-break: unset;
          word-spacing: 0.2rem;
          color: $secondary;
          letter-spacing: 0.1rem;
          font-weight: 600;

          @include mobile {
            font-size: 0.7rem;
            word-spacing: 1px;
            color: $primary;
          }
        }
      }

      .cert {
        border: 2px solid $secondary;
        padding: 2px;
        &:hover {
          cursor: pointer;
        }
      }

      .story {
        font-size: 1rem;
        word-spacing: 2px;
        filter: drop-shadow(0 0 3rem black);
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.2s;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;

        @include mobile {
          font-size: 0.9rem;
          word-spacing: 1px;
          margin: 6px 0px;
        }
      }

      .btn-container {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
      }

      @keyframes slideUp {
        0% {
          transform: translateY(05%);
        }
        100% {
          transform: translateY(0%);
        }
      }
      @keyframes fadeIn {
        100% {
          opacity: 1;
        }
      }

      /* styling for tooltip element before show up */
      .tooltip {
        position: absolute;
        z-index: 1;
        top: 50px;
        text-transform: capitalize;
        background-color: $tertiary;
        border-radius: 5px;
        padding: 0.5em;
        visibility: hidden;
        font-size: 0.9rem;
      }

      /* styling pseudo element "::before" to create bottom arrow */
      .tooltip::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        top: 27px;
        left: 50px;
        border: 10px solid $tertiary;
        transform: rotate(45deg);
      }

      /* styling when text on hover position to show up tooltip element */
      .cert:hover + .tooltip {
        visibility: visible;
        animation: animate 0.5s forwards;
      }

      /* styling for showing animation tooltip effect in hover position or when cursor at above "text element" */
      @keyframes animate {
        0% {
          transform: translateY(-15px);
        }

        50% {
          transform: translateY(6px);
        }

        100% {
          transform: translateY(0);
        }
      }
    }
  }
`;

export { style };
