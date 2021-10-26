import styled from "styled-components";

export const UserProfile = styled.div`
  width: 90%;

  .page_status {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  .page_title {
    border: 1px solid none;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--secondary-color);
    color: white;
  }

  .data_table {
    overflow-x: auto;
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    overflow-x: scroll;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid lightgray;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .profile_name {
    color: var(--secondary-color);
    background-color: none;
    font-size: 2rem;
    font-weight: bold;
  }

  .profile_username {
    font-size: 1.2rem;
  }

  .profile_username:hover {
    color: royalblue;
    text-decoration: underline;
  }

  .profile_username,
  .profile_name {
    margin: 0 0 10px 0;
    padding: 0;
  }

  @media (max-width: 750px) {
    img {
      width: 30%;
      height: auto;
    }
  }
`;

export const PostData = styled.table`
  border-collapse: collapse;
  border-radius: 7px;
  width: 100%;
  margin-bottom: 30px;

  thead > .message > td {
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: royalblue;
  }

  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: royalblue;
      text-decoration: underline;
    }
  }

  button {
    padding: 5px 7px;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    z-index: 2;
  }
  .edit_btn {
    background-color: var(--secondary-color);
    &:hover {
      background-color: var(--secondary-light-color);
    }
  }

  .remove_btn {
    background-color: var(--warning-color);

    &:hover {
      background-color: var(--warning-light-color);
    }
  }

  td,
  th {
    border: 1px solid #aaaaaa;
    text-align: left;
    padding: 7px;
  }

  tr:nth-child(even) {
    background-color: #e4e1e1;
  }
`;
