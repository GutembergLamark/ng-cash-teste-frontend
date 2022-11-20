import styled from "styled-components";

export const CardTransaction = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  max-width: 750px;

  background-color: var(--white);
  color: var(--black);

  border-radius: 0.5rem;

  padding: 0.4rem 1.25rem;

  position: relative;

  h3 {
    width: 30%;
    font-size: 1rem;
  }

  strong {
    width: 35%;
  }

  p {
    width: 35%;
  }

  .cashin {
    color: green;
  }

  .cashout {
    color: red;
  }

  @media only screen and (min-width: 586px) {
    & {
      padding: 1rem 1.25rem;
    }
  }

  @media only screen and (min-width: 768px) {
    & {
      h3 {
        width: 15%;
      }

      strong {
        width: 20%;
      }

      p {
        width: 25%;
      }
    }
  }
`;
