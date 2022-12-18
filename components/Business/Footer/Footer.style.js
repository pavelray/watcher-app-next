import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .footer {
    min-height: 20vh;

    background-color: #0b2361;
    .footer-content {
      margin: 0px 180px;
      display: flex;
      flex-direction: column-reverse;
      color: white;

      .link-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .footer-links {
          padding: 10px;
          flex: 1;
          .title {
            font-size: 22px;
          }

          p {
            width: 400px;
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
      }
    }
  }
`;

export { style };
