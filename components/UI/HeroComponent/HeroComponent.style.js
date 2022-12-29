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

      .title {
        font-size: 2.5rem;
        word-spacing: 2px;
        filter: drop-shadow(0 0 3rem black);
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.1s;
      }

      p {
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

      .btn-primary {
        width: 25%;
        font-size: 0.8rem;
        padding: 8px 8px;
        border: none;
        box-shadow: none;
        background-color: #ffd369;
        color: #393e46;
        border-radius: 2px;
        transition: all 0.2s ease-in-out;
        &:hover:active {
          transform: scale(0.98);
          cursor: pointer;
        }
        &:hover {
          cursor: pointer;
          transform: scale(1.1);
          filter: drop-shadow(0.05rem 0.1rem 0.2rem black);
        }
      }
    }
  }
`;

export { style };
