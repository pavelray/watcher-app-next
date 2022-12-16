
import css from "styled-jsx/css";

const style = css`
@import '../../../styles/colors';
@import '../../../styles/mixins';

.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: $background-color-primary; /* Fallback color */
  background-color: $background-color-light; /* Black w/ opacity */

  &-content {
    background-color: black;
    margin: auto;
    width: 70%;
    padding: 0px 10px;

    @include for-phone-only{
      width: 90%;
    }
  }
  /* The Close Button */
  .close {
    color: $primary-dark;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:focus,
    &:hover {
      color: $primary;
      text-decoration: none;
      cursor: pointer;
    }
  }
}`

export { style };