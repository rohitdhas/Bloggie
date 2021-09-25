import styled from "styled-components";

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000075;
  z-index: 10;

  &.active {
    display: block;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Bar = styled.div`
  display: none;
  position: fixed;
  top: 30%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);

  input {
    max-width: 400px;
    width: 400px;
    margin: 10px 0;
    padding: 10px 5px;
    font-size: 1rem;
    outline: none;
    border: 1px solid grey;
    border-radius: 5px;

    &:hover {
      border: 2px solid grey;
    }
    &:focus {
      border: 2px solid #2bb0ee;
      box-shadow: 1px 7px 14px -15px rgba(0, 0, 0, 0.8);
    }
  }
  &.active {
    display: block;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const SearchResults = styled.ul`
  background-color: white;
  list-style: none;
  border-radius: 5px;
  padding: 0;
  box-shadow: 1px 7px 7px -10px black;

  a {
    text-decoration: none;
    color: black;
  }

  a > li {
    padding: 10px;
    border-radius: 5px;
    width: 100%;

    &:hover {
      background-color: var(--secondary-light-color);
      color: white;
    }
  }
`;
