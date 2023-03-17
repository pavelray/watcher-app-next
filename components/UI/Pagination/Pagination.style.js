import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .pagination {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -0%);

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background:$background1;
      padding: 5px 10px;

      li {
        padding: 8px 5px;
        margin: 0.5px;
        border-radius: 50%;
        width: 40px;
        text-align: center;

        span {
          font-weight: bold;
        }
      }

      .list-item:hover {
        cursor: pointer;
        background-color: $secondary;
      }

      .active {
        background: $secondary;
      }
    }
  }
`;
export { style };
