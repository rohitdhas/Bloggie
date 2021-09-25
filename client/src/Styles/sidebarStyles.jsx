import styled from "styled-components";

export const Bar = styled.ul`
  background-color: var(--primary-color);
  padding: 10px 0;
  width: 200px;
  margin: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  a {
    text-decoration: none;

    &:first-child > li {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      padding: 0;
      #site_logo {
        height: 80px;
        width: 80px;
      }
      &:hover {
        background-color: inherit;
        cursor: pointer;
      }
    }

    .profile_options {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
        border: 2px solid gray;
      }
    }

    li {
      display: block;
      list-style: none;
      padding: 10px 0 10px 10px;
      width: 100%;
      color: white;
      font-weight: bold;

      i {
        margin-right: 10px;
      }

      &:hover {
        background-color: #09b409;
        cursor: pointer;
      }

      &.active {
        background-color: #09b409;
      }
    }
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const MobileBar = styled(Bar)`
  transform: translateX(700px);
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  list-style: none;
  opacity: 0;
  transition: all 0.3s;

  li.sidebar_options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 10px 10px;

    h2 {
      text-decoration: none;
      color: white;
      margin: 8px 0 0 0;
    }

    i {
      margin: 8px 0 0 0;
      font-size: 1.5rem;
      color: white;
    }
  }

  li.sidebar_search {
    margin: 0 10px;
    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 2px solid var(--secondary-color);
        box-shadow: 1px 7px 14px -15px rgba(0, 0, 0, 0.8);
      }
    }
  }

  li.profile_options {
    margin: 5px 0 0 0;
  }

  &.active {
    opacity: 1;
    transform: translateX(0px);
  }

  @media (min-width: 780px) {
    display: none;
  }
`;
