import styled from "styled-components";

export const Main = styled.main`
  height: 100%;

  .primary-section {
    height: 80vh;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;

      color: var(--white);

      height: inherit;
    }

    h1 {
      text-transform: uppercase;
      font-size: 2.5rem;

      width: 80%;
    }

    span {
      font-size: 1.5rem;
      font-weight: 300;

      width: 80%;
    }

    figure {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    .primary-section {
      h1 {
        font-size: 3rem;
      }

      span {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .primary-section {
      display: flex;
      align-items: center;
      justify-content: center;

      span{
        font-size: 2.5rem;
      }

      figure{
        display: block;
      }
    }
  }
`;
