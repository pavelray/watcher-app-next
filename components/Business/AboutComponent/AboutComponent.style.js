import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20rem;

    @include mobile {
      margin-bottom: 20px;
      padding: 0 2rem;
    }
    @include mobile-landscape {
      margin-bottom: 20px;
      padding: 0 2rem;
    }
    @include tablet {
      padding: 0 2rem;
    }
    @include desktop {
      padding: 0 2rem;
    }

    &-title {
      margin-top: 40px;
      font-size: 65px;
      @include mobile {
        font-size: 40px;
      }
      @include mobile-landscape {
        font-size: 45px;
      }
    }
    &-sub-heading {
      text-transform: capitalize;
      letter-spacing: 0.2rem;
    }
    &-body {
      word-spacing: 0.1rem;

      p {
        white-space: pre-line;
      }
    }
    .link {
      color: $secondary;
      text-decoration: underline;
    }
    .comming-soon {
      color: $secondary;
    }
    .coffee {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      justify-content: center;
      font-weight: bold;
      background-color: $tertiary;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      a {
        color: inherit;
        text-decoration: none;
        margin-right: 10px;
        letter-spacing: 1px;
      }

      &:hover {
        background-color: $secondary;
      }
    }
  }
`;

export { style };
