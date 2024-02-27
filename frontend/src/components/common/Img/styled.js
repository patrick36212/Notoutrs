import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
export const ImgWrapper = styled.div`
  height: ${(props) => (props.$gallery ? "auto" : "35px")};
  border-radius: ${(props) => props.$round && "50%"};

  div {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  ${(props) =>
    props.$card &&
    css`
      position: relative;
      min-height: 240px;

      div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(
          to top,
          ${({ theme }) => theme.colors.second},
          transparent
        );
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.xs}px) {
        min-height: 300px;
      }
    `}

  ${(props) =>
    props.$backdrop &&
    css`
      position: relative;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}px) {
        height: 580px;
      }

      div {
        display: initial;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.second} 0%,
            transparent 6%,
            transparent 94%,
            ${({ theme }) => theme.colors.second} 100%
          ),
          linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.second} 0%,
            transparent 6%,
            transparent 94%,
            ${({ theme }) => theme.colors.second} 100%
          );
      }
    `}

    ${(props) =>
    props.$gallery &&
    css`
      height: auto;
      max-height: 40vw;
    `}

    ${(props) =>
    props.$cta &&
    css`
      height: 100%;
      aspect-ratio: 1 / 1;
      position: absolute;

      &:first-of-type {
        background: ${({ theme }) => theme.colors.contrast};
        z-index: 9;

        img {
          object-fit: contain;
        }
      }

      &:nth-of-type(2) {
        left: 25%;
        z-index: 99;
      }

      &:nth-of-type(3) {
        left: 50%;
        z-index: 999;
      }

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.sm}px) {
        &:nth-of-type(2) {
          left: 15%;
          z-index: 99;
        }

        &:nth-of-type(3) {
          left: 30%;
          z-index: 999;
        }
      }
    `}
`;