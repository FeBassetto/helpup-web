import styled from "styled-components";

export const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 48px;
  color: ${({ theme }) => theme.colors["purple-300"]};
`;
