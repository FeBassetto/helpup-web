import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 30px;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["purple-300"]};
`;

export const Section = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;

  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 20px;
  font-weight: 600;

  text-align: center;

  margin-bottom: 20px;
  line-height: 30px;
`;

export const SectionDescription = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 16px;
  font-weight: 400;

  text-align: center;
  line-height: 30px;
`;
