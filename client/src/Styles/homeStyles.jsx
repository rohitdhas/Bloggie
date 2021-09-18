import styled from "styled-components";

export const Page = styled.div`
  max-width: 80%;
  h1 {
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const BlogPost = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin: 10px 0;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: royalblue;
    }
  }

  .blog_title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .snippit {
    color: #585555;
    width: auto;
  }
`;
