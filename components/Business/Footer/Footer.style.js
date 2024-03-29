import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .footer {
    min-height: 20vh;
    background: $background2;
    padding: 20px;
    margin-top: 100px;
    .footer-content {
      display: flex;
      flex-direction: column-reverse;
      .link-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .footer-links {
          padding: 10px;
          flex: 1;
          .title {
            font-size: 22px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          p {
            width: 60vmin;
          }
          ul {
            list-style: none;
            margin: 0 auto;
            padding: 0;
            margin-top: 10px;
          }
          li {
            line-height: 30px;
            cursor: pointer;
          }
        }
        .app {
          flex: 2;
        }
        .link{
          color: $secondary;
          text-decoration: underline;
        }
        
        @include mobile {
          display: flex;
          flex-direction: column;
        }
        @include mobile-landscape {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  .credit-bar{
    display:flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
`;

export { style };
