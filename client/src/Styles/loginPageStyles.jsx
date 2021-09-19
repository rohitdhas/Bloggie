import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;

  .split {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;

    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }

  .left {
    width: 40%;
    left: 0;
  }
  .right {
    width: 60%;
    right: 0;
  }

  @media (max-width: 750px) {
    .left {
      display: none;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      form {
        width: 80%;
      }
    }
  }
`;

export const LeftSection = styled.div`
  background-color: var(--primary-color);
  color: white;

  .centered {
    img {
      height: 100px;
      width: 100px;
    }

    .site_title {
      font-size: 2em;
      font-weight: bold;
    }
    .site_description {
      font-size: 1.3em;
    }
  }
`;

export const LoginForm = styled.div`
  form {
    #message_card {
      display: none;
      background-color: var(--warning-color);
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-weight: bold;

      &.active {
        display: block;
      }
    }

    p:first-child {
      font-size: 2em;
      font-weight: bold;
    }
    input,
    button {
      width: 100%;
      margin: 10px 0;
      padding: 10px 5px;
      font-size: 1rem;
      outline: none;
      border: 1px solid grey;
      border-radius: 5px;
    }
    input {
      &:hover {
        border: 2px solid grey;
      }
      &:focus {
        border: 2px solid var(--secondary-color);
        box-shadow: 1px 7px 14px -15px rgba(0, 0, 0, 0.8);
      }
    }
    button {
      display: block;
      cursor: pointer;
      border: none;
      color: white;
      background-color: var(--secondary-color);
      font-weight: bold;
      i {
        margin-right: 5px;
        font-weight: bold;
      }

      &:hover {
        background-color: var(--secondary-light-color);
      }
    }

    p {
      font-weight: bold;
      a {
        &:hover {
          color: blue;
        }
      }
    }
  }
`;
