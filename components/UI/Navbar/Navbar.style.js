import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";
  
  .navbar {
    padding: 10px;
    display: flex;

    @include for-phone-only {
      padding: 10px 5px;
    }

    .hamburger-icon {
      display: none;

      @include for-phone-only {
        display: flex;
        margin-left: 5px;

        span {
          font-size: 35px;
        }
      }
    }

    ul {
      display: flex;
      list-style: none;
      flex-direction: row;
      justify-content: space-evenly;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      width: 30%;

      li {
        display: flex;
        align-items: center;
        align-content: center;
        text-align: center;
      }
      li:hover {
        cursor: pointer;
        color: $primary-dark;
      }
      a {
        text-decoration: inherit;
        color: inherit;
      }
      .active {
        color: $primary-dark;
        border-bottom: 2px solid $primary-dark;
      }

      @include for-phone-only {
        display: none;
      }
    }

    .brand-logo {
      display: flex;

      span {
        display: flex;
        align-items: center;
        font-size: 45px;
        margin-right: 5px;
        margin-left: 5px;
        color: $primary;

        @include for-phone-only {
          font-size: 23px;
        }
      }
    }

    .brand {
      display: flex;
      width: 30%;
      align-items: center;
      cursor: pointer;
      @include for-phone-only {
        width: 25%;
      }

      span {
        font-size: 35px;
        font-family: "Pacifico", cursive;
        color: $primary;
        &:hover {
          color: $primary-dark;
        }

        @include for-phone-only {
          font-size: 14px;
        }
      }
    }

    .search-wrapper {
      display: flex;
      width: 40%;
      justify-content: center;
      @include for-phone-only {
        width: 60%;
      }
      &__input {
        width: 60%;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 10px 15px;
        padding-right: 55px;
        &:focus {
          border: none;
          box-shadow: none;
          outline: none;
        }

        @include for-phone-only {
          font-size: 10px;
          width: 75%;
          padding-right: 42px;
        }
      }
      &__button {
        background: none;
        border: none;
        color: $color;
        cursor: pointer;
        margin-left: -50px;

        @include for-phone-only {
          margin-left: -38px;
        }
        span {
          font-size: 40px;
          font-weight: 800;
          color: $primary;
          &:hover {
            color: $primary-dark;
          }

          @include for-phone-only {
            font-size: 25px;
          }
        }
      }
    }
    .hamburger-icon {
      background: none;
      border: none;
      color: $color;
      cursor: pointer;
    }
  }

  /* Menu mobile */
  .mobile {
    display: block;
    overflow: hidden;
    height: 0px;
    width: 100%;
    z-index: 1;
    position: fixed;
    transition: all 0.4s ease-out, background 1s ease-out;
    background-image: linear-gradient(
      to right top,
      #2b2e4a,
      #342f4b,
      #3c304b,
      #44324b,
      #4b334b,
      #53344d,
      #5a354e,
      #62364e,
      #6e364f,
      #7a364f,
      #85364d,
      #903749
    );

    &-menu {
      clear: both;
    }
  }
  .mobile.menu-open {
    height: 100%;
    transition: all 0.45s ease-out, background 0.8s ease-out;
  }

  /* Menu List items */
  .mobile ul.menu {
    position: relative;
    display: block;
    padding: 0px 40px 0;
    list-style: none;
  }
  .mobile ul.menu li.menu-item a {
    display: block;
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    line-height: 2.8;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .mobile ul.menu li.menu-item {
    border-bottom: 1px solid #333;
    margin-top: 5px;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      -webkit-transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  }
  .mobile ul.menu li.menu-item:nth-child(1) {
    transition-delay: 0.35s;
  }
  .mobile ul.menu li.menu-item:nth-child(2) {
    transition-delay: 0.3s;
  }
  .mobile ul.menu li.menu-item:nth-child(3) {
    transition-delay: 0.25s;
  }
  .mobile ul.menu li.menu-item:nth-child(4) {
    transition-delay: 0.2s;
  }
  .mobile ul.menu li.menu-item:nth-child(5) {
    transition-delay: 0.15s;
  }
  .mobile ul.menu li.menu-item:nth-child(6) {
    transition-delay: 0.1s;
  }
  .mobile ul.menu li.menu-item:nth-child(7) {
    transition-delay: 0.05s;
  }
  .mobile.menu-open ul.menu li.menu-item {
    opacity: 1;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(1) {
    transition-delay: 0.05s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(2) {
    transition-delay: 0.1s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(3) {
    transition-delay: 0.15s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(4) {
    transition-delay: 0.2s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(5) {
    transition-delay: 0.25s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(6) {
    transition-delay: 0.3s;
  }
  .mobile.menu-open ul.menu li.menu-item:nth-child(7) {
    transition-delay: 0.35s;
  }
`;

export {style}
