import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .movie {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      text-shadow: 2px 2px 1px $background-color-primary;

      @include for-phone-only {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }
    &-tagline {
      font-weight: 400;
      margin: 5px 0;
      font-style: italic;
    }

    &-gen {
      margin: 15px 0px;
      padding: 0px;
      li {
        font-size: 16px;
        width: auto;
        display: block;
        float: left;
        margin-right: 6px;
        font-weight: 600;
        word-spacing: 4px;
        letter-spacing: 2px;
      }

      .rating {
        border: solid 2px $primary;
        padding: 0.15em 0.4em;
        font-size: 0.85em;
        margin-right: 0.45em;
      }
    }
  }
`;

export { style };
