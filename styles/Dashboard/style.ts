import styled from "styled-components";

interface IProps {
  click: boolean;
}

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

    .info-user {
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

      strong {
        font-size: 1.25rem;
      }

      h1 {
        font-size: 1.25rem;
        text-align: center;

        width: 80%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    @media only screen and (min-width: 768px) {
      .info-user {
        justify-content: space-between;
        flex-direction: row;

        h1 {
          font-size: 1.5rem;

          width: 50%;
        }
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

      .filter-date {
        background-color: var(--white-1);
        border-radius: 0.4rem;
        padding: 0.75rem;
      }
    }

    @media only screen and (min-width: 768px) {
      .dropdown-filter {
        margin-bottom: 0.625rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      height: 40%;

      padding: 0.625rem;

      overflow-y: scroll;

      li {
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
      }

      @media only screen and (min-width: 586px) {
        li {
          padding: 1rem 1.25rem;
        }
      }

      @media only screen and (min-width: 768px) {
        li {

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
    }

    ul::-webkit-scrollbar-thumb {
      width: 8px;
      background-color: var(--gray);
      border-radius: 5px;
    }
    ul::-webkit-scrollbar {
      position: absolute;
      right: 0;

      width: 10px;
      background-color: var(--black-1);

      border-radius: 5px;
    }
  }
`;

export const ContainerCalendar = styled.div<IProps>``;
