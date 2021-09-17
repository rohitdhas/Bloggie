import styled from "styled-components";

export const Bar = styled.ul`
  background-color: #0fe456;
  padding: 10px 0;
  width: 180px;
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
`;
