import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: 100%;

  padding: 0 0.625rem;

  border-radius: 0.5rem;
  border: 1px solid transparent;

  background-color: var(--gray);

  transition: all 0.8s;

  &:focus-within {
    background-color: var(--white);
  }

  svg {
    color: var(--white);
  }

  &:focus-within svg {
    color: var(--gray);
  }

  input {
    width: 100%;
    height: 100%;

    color: var(--white);

    padding: 0.75rem;

    outline: none;
  }

  &:focus-within input {
    color: var(--black);
  }

  input::placeholder {
    color: var(--white);
  }

  &:focus-within input::placeholder {
    color: var(--black);
  }
`;
