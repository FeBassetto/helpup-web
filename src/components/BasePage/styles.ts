"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 20px;

  max-width: 550px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 30px;

  text-align: center;
  color: ${({ theme }) => theme.colors["purple-100"]};
`;

export const Icon = styled(Image)`
  width: 90vw;
  height: 90vw;

  max-width: 500px;
  max-height: 500px;
`;

export const StyledLink = styled(Link)`
  width: 100%;

  display: flex;
  justify-content: center;
`;
