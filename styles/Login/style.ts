import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;

  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    background-color: var(--black-1);

    padding: 1.5rem;
    margin: 2rem;

    border-radius: 0.625rem;

    h1 {
      color: var(--white);

      text-align: center;
    }
  }
`;
