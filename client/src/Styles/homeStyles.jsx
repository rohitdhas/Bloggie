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
  justify-content: space-between;
  padding: 10px 0;
  section {
    margin: 10px 0;
    width: 60%;

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

  .img_container {
    position: relative;
    height: 150px;
    width: 30%;
    img {
      border-radius: 7px;
      height: 150px;
      width: 100%;
      &::after {
        content: "No Image";
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 7px;
        background-color: #cecece;
      }
    }
  }
`;
