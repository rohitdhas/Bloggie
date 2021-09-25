import styled from "styled-components";

export const Nav = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 10px;
  padding: 5px 0;
  background-color: white;

  a {
    text-decoration: none;
    color: black;
  }

  h2 {
    margin: 8px 0 0 0;
  }

  i {
    margin: 8px 0 0 0;
    font-size: 1.5rem;
  }

  @media (max-width: 750px) {
    display: flex;
  }
`;
