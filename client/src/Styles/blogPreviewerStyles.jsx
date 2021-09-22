import styled from "styled-components";

export const Previewer = styled.div`
  width: 70%;
  .blog_title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 10px 0;
  }
  img {
    width: 100%;
    height: 400px;
  }
`;

export const ActionsCard = styled.ul`
  position: fixed;
  top: 20%;
  right: 5%;
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;

  li {
    margin: 0 10px;
    cursor: pointer;
    list-style: none;

    i {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;
