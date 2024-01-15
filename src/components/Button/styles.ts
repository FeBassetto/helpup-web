import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  max-width: 300px;

  padding: 15px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors["purple-300"]};
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 500;
  font-size: 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
