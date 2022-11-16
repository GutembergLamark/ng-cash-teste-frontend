import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    color: var(--white);

    font-weight: bold;
    font-size: 1rem;
  }

  .button {
    --offset: 10px;
    --border-size: 2px;

    display: block;

    width: 80%;

    position: relative;

    padding: .75rem 1rem;
    margin: 1.25rem auto;

    appearance: none;

    border: 0;
    border-radius: 0;

    background: transparent;
    color: var(--white);

    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: bold;
    font-size: 0.75rem;

    outline: none;

    cursor: pointer;

    box-shadow: inset 0 0 0 var(--border-size) currentcolor;

    transition: all 0.8s ease;

    &:hover {
      background: rgba(100, 0, 0, 0.03);
    }

    .button__horizontal,
    .button__vertical {
      position: absolute;
      top: var(--horizontal-offset, 0);
      right: var(--vertical-offset, 0);
      bottom: var(--horizontal-offset, 0);
      left: var(--vertical-offset, 0);

      transition: transform 0.8s ease;

      will-change: transform;

      &::before {
        content: "";

        position: absolute;

        border: inherit;
      }
    }

    .button__horizontal {
      --vertical-offset: calc(var(--offset) * -1);

      border-top: var(--border-size) solid currentcolor;
      border-bottom: var(--border-size) solid currentcolor;

      &::before {
        top: calc(var(--vertical-offset) - var(--border-size));
        bottom: calc(var(--vertical-offset) - var(--border-size));
        left: calc(var(--vertical-offset) * -1);
        right: calc(var(--vertical-offset) * -1);
      }
    }

    &:hover .button__horizontal {
      transform: scaleX(0);
    }

    .button__vertical {
      --horizontal-offset: calc(var(--offset) * -1);

      border-left: var(--border-size) solid currentcolor;
      border-right: var(--border-size) solid currentcolor;

      &::before {
        top: calc(var(--horizontal-offset) * -1);
        bottom: calc(var(--horizontal-offset) * -1);
        left: calc(var(--horizontal-offset) - var(--border-size));
        right: calc(var(--horizontal-offset) - var(--border-size));
      }
    }

    &:hover .button__vertical {
      transform: scaleY(0);
    }
  }
`;
