import styled from "styled-components";

export const Previewer = styled.div`
  width: 70%;

  .page_status {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
  }

  .markdown {
    line-height: 2;
  }

  .blog_title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 10px 0;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 80px;

    .blog_title {
      font-size: 2.2rem;
    }

    img {
      height: auto;
    }
  }
`;

export const ActionsCard = styled.ul`
  position: fixed;
  top: 20%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 10px;

  .writer_info {
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: royalblue;
        text-decoration: underline;
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 10px;
      display: flex;
      list-style: none;
      align-items: center;

      &:first-child > i {
        margin-left: 3px;
      }

      i {
        cursor: pointer;
        font-size: 1.5rem;
        margin-right: 10px;

        &.fa-bookmark {
          color: var(--secondary-color);
        }

        &.fa-heart {
          color: var(--warning-color);
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  @media (max-width: 900px) and (min-width: 700px) {
    margin-left: 250px;
  }

  @media (max-width: 750px) {
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    justify-content: space-evenly;
    margin: 0;
    flex-direction: row;
    margin-left: 0px;
  }
`;
