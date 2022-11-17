import styled from "styled-components";

interface IClickDropdown {
  click: boolean;
}

export const Heading = styled.header<IClickDropdown>`
  width: 100%;
  height: 20vh;

  .header-content {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0.625rem 0;

    margin: 0 auto;
  }

  @media only screen and (min-width: 480px) {
    .header-content {
      img {
        width: 90px;
        height: 90px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .header-content {
      img {
        width: 110px;
        height: 110px;
      }
    }
  }

  .header-content {
    figure {
      a {
        border: none;
      }
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;

    .dropdown__click {
      display: flex;

      padding: 0.5rem 1rem;

      font-size: 1rem;

      border: none;

      background: none;

      cursor: pointer;

      .hamburguer {
        color: #f9f9f9;
        border-top: 2px solid;
        border-top-color: ${(props) => props.click && "transparent"};

        width: 20px;
      }

      .hamburguer::after,
      .hamburguer::before {
        content: "";
        display: block;

        width: 20px;
        height: 2px;

        background: currentColor;

        margin-top: 5px;

        transition: all 0.5s;

        position: relative;
      }

      .hamburguer::before {
        transform: ${(props) => props.click && "rotate(135deg)"};
      }

      .hamburguer::after {
        transform: ${(props) => props.click && "rotate(-135deg)"};
        top: ${(props) => props.click && "-7px"};
      }
    }

    .dropdown__content {
      display: none;
      flex-direction: column;
      gap: 0.625rem;

      position: absolute;
      right: 0;

      background-color: var(--black-1);

      max-width: 160px;

      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

      padding: 12px 16px;
      margin: 1rem 0;

      border-radius: 1.25rem;
      border: 1px solid var(--black);

      z-index: 1;
    }

    .dropdown__content {
      display: ${(props) => (props.click ? "flex" : "none")};
    }
  }

  a {
    background-color: transparent;
    color: white;

    text-align: left;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;

    border-radius: 5px;
    border: none;

    padding: 0.25rem;
  }

  @media only screen and (min-width: 768px) {
    .dropdown {
      display: flex;
      width: max-content;

      .dropdown__click {
        display: none;
      }

      .dropdown__content {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;

        background: none;

        position: inherit;

        z-index: 0;
      }
    }

    a {
      border-bottom: 2px solid transparent;
      border-radius: 0;

      padding: 0.625rem;

      transition: all 0.8s;

      &:hover {
        border-color: var(--white);
      }
    }
  }
`;
