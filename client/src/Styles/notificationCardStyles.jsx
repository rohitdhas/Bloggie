import styled from "styled-components";

export const NotificationCardBox = styled.ul`
  position: fixed;
  bottom: 10%;
  right: 5%;
  list-style: none;
`;

export const NotificationCard = styled.li`
  display: none;
  justify-content: space-between;
  align-items: center;
  max-width: auto;
  width: 300px;
  background-color: tomato;
  padding: 10px;
  margin: 5px 0;
  color: white;
  border-radius: 5px;
  box-shadow: 1px 14px 14px -15px rgba(0, 0, 0, 0.3);

  i {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }

  &.success {
    background-color: var(--primary-color);
  }

  &.active {
    display: flex;
  }
`;
