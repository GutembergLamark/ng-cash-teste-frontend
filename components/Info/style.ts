import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;

  padding: 1rem 1.25rem;

  color: var(--white);

  div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  svg {
    cursor: pointer;
  }

  strong {
    font-size: 1.25rem;
    width: max-content;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: hidden;
  }

  .user-name {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  h1 {
    font-size: 1.25rem;
    text-align: center;

    width: max-content;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media only screen and (min-width: 768px) {
    & {
      justify-content: space-between;
      flex-direction: row;

      .user-name {
        justify-content: left;
      }

      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
