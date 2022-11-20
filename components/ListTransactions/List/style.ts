import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  height: 40%;

  padding: 0.625rem;

  overflow-y: scroll;

  .container-empty {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30%;

    .empty-transaction {
      color: var(--white);
      text-align: center;
    }
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: var(--gray);
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    position: absolute;
    right: 0;

    width: 10px;
    background-color: var(--black-1);

    border-radius: 5px;
  }
`;
