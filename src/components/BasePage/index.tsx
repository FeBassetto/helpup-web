import { Button } from "../Button";
import { Logo } from "../Logo";
import { Container, Icon, StyledLink, Title } from "./styles";

interface BasePageProps {
  title: string;
  alt: string;
  src: string;
  link: string;
  buttonText: string;
  handleOnClick?: () => void;
}

export function BasePage({
  alt,
  src,
  title,
  buttonText,
  link,
  handleOnClick,
}: BasePageProps) {
  return (
    <Container>
      <Logo />
      <Title>{title}</Title>
      <Icon alt={alt} src={src} />
      {handleOnClick ? (
        <Button>{buttonText}</Button>
      ) : (
        <StyledLink href={link}>
          <Button>{buttonText}</Button>
        </StyledLink>
      )}
    </Container>
  );
}
