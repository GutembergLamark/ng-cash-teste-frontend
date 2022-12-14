import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --black: #000;
  --black-1: #111;
  --white: #fff;
  --white-1: #eee;
  --white-2: #ddd;
  --gray: #565867;
}

  body,
  header,
  main,
  footer,
  div,
  figure,
  section,
  ul,
  ol,
  li,
  form,
  input,
  label,
  button,
  h1,
  h2,
  h3,
  p,
  a,
  span {
    margin: 0;
    padding: 0;

    border: none;

    background: none;

    box-sizing: border-box;

    font-family: 'IBM Plex Sans', sans-serif;
  }

  body{
    background: url("/images/banner-landing-page.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    height: 100vh;
  }

  ul, ol, li{
    list-style: none
  }
`;
