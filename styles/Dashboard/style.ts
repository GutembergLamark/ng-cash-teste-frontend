import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    position: relative;

    background-color: var(--black-1);

    width: 90vw;
    height: 75vh;

    padding: 1rem;

    border-radius: 2.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;

      padding: 1.25rem;

      margin-bottom: 0.625rem;

      color: var(--white);

      strong {
        font-size: 1.25rem;
      }
    }

    @media only screen and (min-width: 768px) {
      div {
        justify-content: start;
      }
    }

    h2 {
      color: var(--white);

      text-align: center;

      margin-bottom: 3rem;
    }

    button {
      width: 70%;

      position: absolute;
      bottom: 1.25rem;
      left: 15%;
    }

    @media only screen and (min-width: 768px) {
      button {
        width: 50%;
        left: 25%;
      }
    }
  }
`;
