import styled, { css } from "styled-components";

export const Section = styled.section`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) =>
    props.$images &&
    css`
      gap: 0;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}

  ${(props) =>
    props.$reviews &&
    css`
      padding: 12px 6px;
      grid-template-columns: none;
      grid-auto-flow: column;
      grid-auto-rows: max-content;
      overflow-x: auto;
      overflow-y: hidden;
      max-height: 256px;
    `} 
  
  ${(props) =>
    props.$cta &&
    css`
      padding: 24px 10px 8px;
      grid-template-columns: 1fr;
      border-radius: 24px;
      box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xs}px) {
        padding: 32px 16px 16px;
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 16px;
      }
    `};
`;