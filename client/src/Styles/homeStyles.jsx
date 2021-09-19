import styled from "styled-components";

export const Page = styled.div`
  max-width: 80%;
  h2 {
    border: 1px solid none;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--secondary-color);
    color: white;
  }
`;

export const BlogPost = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 10px 0;
  section {
    margin: 10px 0;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        color: var(--secondary-color);
      }
    }

    .blog_title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .snippit {
      color: #585555;
      width: auto;
      font-weight: 300;
    }
  }

  img {
    height: 150px;
    width: 250px;
    border-radius: 10px;
  }
`;
