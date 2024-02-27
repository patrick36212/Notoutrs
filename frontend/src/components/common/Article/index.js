import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  max-width: 450px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
  border-radius: 24px;
  transition: 0.4s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px 6px ${({ theme }) => theme.colors.shadow};
  }
`;
