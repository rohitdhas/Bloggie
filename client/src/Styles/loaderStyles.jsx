import styled from "styled-components";

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;

  &.active {
    display: block;
  }
`;

export const Spinner = styled.div`
  display: none;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 3px solid #0fe456;
  border-top: 3px solid transparent;
  position: fixed;
  bottom: 50%;
  right: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
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
