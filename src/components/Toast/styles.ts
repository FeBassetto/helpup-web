import styled from "styled-components";

interface ContainerProps {
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 90%;
  padding: 15px;
  border-radius: 10px;

  background-color: ${({ theme, isError }) =>
    isError ? theme.colors.red : theme.colors["purple-700"]};
  text-align: center;
  line-height: 30px;

  z-index: 3;
`;

export const Message = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
