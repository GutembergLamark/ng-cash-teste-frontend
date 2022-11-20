import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    position: relative;

    background-color: var(--black-1);

    width: 90vw;
    max-width: 1000px;
    height: 75vh;

    padding: 0.625rem;

    border-radius: 2.5rem;

    transition: all 0.5s;

    @media only screen and (min-width: 768px) {
      & {
        width: 80%;
      }
    }

    @media only screen and (min-width: 1024px) {
      &width {
        width: 70%;
      }
    }

    h2 {
      color: var(--white);

      text-align: center;

      font-size: 1.25rem;
    }

    @media only screen and (min-width: 768px) {
      h2 {
        font-size: 1.5rem;
      }
    }

    button {
      width: 70%;

      position: absolute;
      bottom: 1.25rem;
      left: 15%;
    }

    @media only screen and (min-width: 768px) {
      button {
        width: 30%;

        left: 35%;
      }
    }

    .dropdown-filter {
      display: flex;
      justify-content: space-around;
      gap: 0.625rem;

      padding: 1rem 1.25rem;

      width: 100%;

      button {
        position: inherit;
      }

      div {
        width: 40vw;
        max-width: 250px;

        button {
          position: inherit;
          width: 100%;
        }
      }
    }

    @media only screen and (min-width: 768px) {
      .dropdown-filter {
        margin-bottom: 0.625rem;
      }
    }
  }
`;
