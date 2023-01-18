import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .pagination {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;

      li {
        padding: 12px 2px;
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
        background-color: $background;
      }

      .active {
        background: $background;
      }
    }
  }
`;
export { style };
