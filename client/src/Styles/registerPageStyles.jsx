import styled from "styled-components";

export const RegisterForm = styled.div`
  form {
    #message_card {
      display: none;
      background-color: #ec4f34;
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
        border: 2px solid #2bb0ee;
        box-shadow: 1px 7px 14px -15px rgba(0, 0, 0, 0.8);
      }
    }
    button {
      display: block;
      cursor: pointer;
      border: none;
      color: white;
      background-color: #0d98d8;
      font-weight: bold;
      i {
        margin-right: 5px;
        font-weight: bold;
      }

      &:hover {
        background-color: #47afdf;
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
