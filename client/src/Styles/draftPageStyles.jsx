import styled from "styled-components";
import { Card } from "./bookmarkPageStyles";

export const DraftCard = styled(Card)`
  i:hover {
    color: var(--warning-color);
  }
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10px;

  &.active {
    display: block;
  }
`;

export const ConfirmationCard = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  p {
    font-size: 1.3rem;
    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: space-between;

    button {
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:first-child {
        background-color: var(--warning-color);
        color: white;

        &:hover {
          background-color: var(--warning-light-color);
        }
      }
      &:last-child {
        background-color: var(--secondary-color);
        color: white;

        &:hover {
          background-color: var(--secondary-light-color);
        }
      }
    }
  }

  &.active {
    display: block;
  }

  @media (max-width: 500px) {
    p {
      font-size: 1rem;
      width: 100%;
    }
  }
`;
