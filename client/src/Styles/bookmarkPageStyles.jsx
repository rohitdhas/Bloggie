import styled from "styled-components";
import { BlogPost } from "./homeStyles";

export const Card = styled(BlogPost)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  i {
    font-size: 2rem;
    margin-left: 15px;
    cursor: pointer;
    color: var(--dark-color);
  }
`;
