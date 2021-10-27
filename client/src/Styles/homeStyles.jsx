import styled from "styled-components";

export const Page = styled.div`
  max-width: 80%;
  h2 {
    border: 1px solid none;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--secondary-color);
    color: white;
  }

  .page_status {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 750px) {
    max-width: 100%;

    h2 {
      padding: 5px;
    }
  }
`;

export const BlogPost = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  line-height: 1.5;
  font-size: 0.9rem;

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
      font-size: 1.8rem;
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
      border-radius: 5px;
      height: 150px;
      width: 100%;
      &::after {
        z-index: -1;
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

  /* Media Queries for devices with small width */
  @media (max-width: 750px) {
    section {
      width: 70%;
      /* font-size: 0.8rem; */

      .blog_title {
        font-size: 1.5rem;
      }
      .snippit {
        color: #585555;
        width: auto;
        font-weight: 300;
      }
    }

    .img_container {
      height: 100px;

      img {
        height: 100px;
        &::after {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
