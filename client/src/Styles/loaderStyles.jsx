import styled from "styled-components";

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 50;
  justify-content: center;
  align-items: center;

  &.active {
    display: flex;
  }
`;

export const Spinner = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 3px solid #0fe456;
  border-top: 3px solid transparent;
  animation: loading 1s infinite;

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &.active {
    display: block;
  }
`;
