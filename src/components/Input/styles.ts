import { Eye, EyeSlash } from "@phosphor-icons/react";
import styled from "styled-components";

interface PlaceHolderProps {
  isFocus: boolean;
}

export const Container = styled.div`
  width: 90%;
  max-width: 350px;

  height: 50px;

  position: relative;

  border-bottom: 2px solid ${({ theme }) => theme.colors["purple-300"]};
`;

export const PlaceHolder = styled.p<PlaceHolderProps>`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: bold;
  font-size: 16px;

  height: 50px;
  width: calc(100% - 32px);
  padding-bottom: 12px;
  box-sizing: border-box;

  display: flex;
  align-items: flex-end;

  position: absolute;

  bottom: ${({ isFocus }) => (isFocus ? "30px" : "0px")};
  left: 0;

  z-index: 2;
  cursor: ${({ isFocus }) => (isFocus ? "default" : "pointer")};

  transition: 0.25s bottom;
`;

export const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 400;
  font-size: 20px;

  height: 40px;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;

  position: absolute;

  bottom: 0;
  left: 0;
`;

export const PasswordIcon = styled(Eye)`
  color: ${({ theme }) => theme.colors["purple-300"]};

  position: absolute;
  bottom: calc(50px / 2 - 32px / 2);
  right: 0;

  cursor: pointer;
`;

export const PasswordSlashIcon = styled(EyeSlash)`
  color: ${({ theme }) => theme.colors["purple-300"]};

  position: absolute;
  bottom: calc(50px / 2 - 32px / 2);
  right: 0;

  cursor: pointer;
`;
