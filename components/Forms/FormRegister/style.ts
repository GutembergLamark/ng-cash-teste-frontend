import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .container-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  label {
    color: var(--white);

    font-weight: bold;
    font-size: 1rem;
  }
`;

export const Error = styled.div`
  position: relative;
  .error {
    color: red;
  }
  &:hover span {
    opacity: 1;
  }
  span {
    position: absolute;
    padding: 10px;
    border-radius: 0.25rem;
    width: fit-content;
    text-align: center;
    white-space: nowrap;
    background-color: #f10;
    color: var(--white);
    right: 35px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    &::before {
      content: "";
      border-style: solid;
      border-width: 0px 7px 10px 7px;
      border-color: #f10 transparent;
      transform: rotate(90deg);
      position: absolute;
      top: 4px;
      right: -8px;
    }
  }
`;
