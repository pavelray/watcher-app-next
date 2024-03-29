import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vmin;
    user-select: none;
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.1s;
    opacity: 0;

    .image {
      position: relative;
      width: 25vmin;
      height: 35vmin;
      object-fit: cover;
      object-position: 100% center;

      &:hover {
        animation: zoomIn 1s ease-out forwards;
        animation-delay: 1s;
        cursor: pointer;
      }

      @keyframes zoomIn {
        100% {
          transform: scale(1.05);
        }
      }
    }
    @keyframes fadeIn {
      100% {
        opacity: 1;
      }
    }
  }

  .image-preview-main {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0,1);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
  }

  .image-preview-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
    width: 100%;
  }

  .control-btn:hover {
    cursor: pointer;
  }
  .image-with-close {
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .close-wrapper {
    position: relative;
    top: 0%;
    right: 0%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    margin-right: 1rem;
  }

  .close-wrapper:hover {
    cursor: pointer;
  }

  .image-index{
    margin-right: 1rem;
  }

  .image-preview {
    max-width: 90vw;
    max-height: 90vh;
    margin: 0px 10px;
    @include mobile {
      max-width: 75vw;
      margin-bottom: 20px;
    }
  }
  .hidden{
    opacity: 0;
  }
`;

export { style };
