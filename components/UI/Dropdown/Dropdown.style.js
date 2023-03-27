import css from "styled-jsx/css";

const style = css`
  @import "../../../styles/colors";
  @import "../../../styles/mixins";

  .dropdown {
    padding: 0.8rem 2rem 0.8rem 1.5rem;
    font-size: 1rem;
    color: $primary;
    background: $background2
      url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDMwIDYwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTE1LjY3NiAzMy4wMzdsNS4xMDItNS4xMDMtLjcwNy0xLjA4Ni00LjQ5IDQuNDkyLTQuNDktNC40OTItLjcwMiAxLjA4NiA1LjEwMiA1LjEwMy4wNzUuMTE1LjAyLS4wMi4wMi4wMnoiLz48L3N2Zz4K)
      no-repeat 100% 45%;
    background-size: 30px 60px;
    border-color: $background2;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export { style };
