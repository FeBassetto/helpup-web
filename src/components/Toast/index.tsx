import { Container, Message } from "./styles";

interface ToastProps {
  message: string;
  isError: boolean;
}

export function Toast({ message, isError }: ToastProps) {
  return (
    message && (
      <Container isError={isError}>
        <Message>{message}</Message>
      </Container>
    )
  );
}
