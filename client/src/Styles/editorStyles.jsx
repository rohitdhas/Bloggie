import styled from "styled-components";

export const Page = styled.div`
  margin: 10px 30px 0 0;

  .blog_data {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    margin-bottom: 5px;
    input {
      margin: 5px 0;
      padding: 5px;
      font-size: 1.2em;
      outline: none;
      border: 1px solid grey;
      border-radius: 5px;
      &:hover {
        border: 2px solid grey;
      }
      &:focus {
        border: 2px solid var(--secondary-color);
        box-shadow: 1px 7px 14px -15px rgba(0, 0, 0, 0.8);
      }
    }
  }

  .help_icon {
    position: fixed;
    bottom: 0%;
    right: 0%;
    font-size: 3rem;
    cursor: pointer;
    color: var(--primary-color);
    font-weight: bold;

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      font-family: "Montserrat";
      content: "Markdown Guide";
      padding: 5px;
      background-color: #2b2b2b;
      color: white;
      font-size: 0.7rem;
      border-radius: 5px;
      margin: 5px;
      display: block;
      transition: all 0.3s;
      position: relative;
      right: 10px;
      opacity: 0;
    }
  }

  @media (max-width: 700px) {
    margin: 10px 0;

    .help_icon {
      display: none;
    }
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  padding: 10px 0;

  .editor_title {
    font-size: 2rem;
    font-weight: 700;
  }

  .buttons > button {
    margin: 0 10px;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    background-color: var(--secondary-color);
    color: white;
    font-weight: bold;
    border-radius: 5px;

    i {
      margin-right: 5px;
    }

    &:hover {
      background-color: var(--secondary-light-color);
    }
  }

  @media (max-width: 700px) {
    .editor_title {
      display: none;
    }
    .buttons > button {
      padding: 10px;
      margin: 0 5px;
    }
  }
`;

export const Toolbar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0 5px;
  background-color: white;

  li {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: #e2e2e2;
    }
  }

  @media (max-width: 700px) {
    overflow-x: auto;
  }
`;

export const EditSection = styled.div`
  display: flex;
  height: 70vh;
  margin-bottom: 10px;

  #editor {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    input {
      font-size: 1.5rem;
      font-weight: 900;
      padding: 5px;
      margin-bottom: 10px;
      border-radius: 5px;
      outline: none;
      border: 1px solid grey;
    }

    textarea {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      font-size: 1.1rem;
      padding: 5px;
      outline: none;
      border-radius: 5px;
    }

    input,
    textarea {
      &:hover {
        border: 2px solid grey;
      }
      &:focus {
        border: 2px solid var(--secondary-color);
        box-shadow: 1px 7px 14px -15px rgba(0, 0, 0, 0.8);
      }
    }
  }

  #previewer {
    height: 100%;
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    overflow: auto;

    ​ img {
      width: 90%;
    }

    &::before {
      content: "Previewer";
      top: 0px;
      font-weight: bold;
      color: var(--primary-color);
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    #previewer {
      margin: 10px 0;
    }
  }
`;
