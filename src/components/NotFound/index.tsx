"use client";

import { Container, NotFoundIcon, StyledLink, Title } from "./styles";
import Icon from "@/assets/img/404.svg";
import { Logo } from "../Logo";
import { Button } from "../Button";

export function NotFound() {
  return (
    <Container>
      <Logo />
      <Title>Ops... Não encontramos esta página</Title>
      <NotFoundIcon src={Icon} alt="404 Not Found" />
      <StyledLink href="/">
        <Button>Página Inicial</Button>
      </StyledLink>
    </Container>
  );
}
