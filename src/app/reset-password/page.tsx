"use client";

import { Input } from "@/components/Input";
import { Container } from "./styles";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { fetchInstance } from "@/api/fetch";
import { useRouter } from "next/navigation";

interface ResetPasswordParams {
  searchParams: {
    token: string;
  };
}

export default function ResetPassword({ searchParams }: ResetPasswordParams) {
  const { token } = searchParams;

  let router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const showErrorMessage = (message: string) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const handleButtonClick = async () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)/;

    if (password.length < 6 || confirmPassword.length < 6) {
      return showErrorMessage("A senha deve ter pelo menos 6 caracteres.");
    }

    if (password !== confirmPassword) {
      return showErrorMessage("Digite senhas iguais.");
    }

    if (!passwordRegex.test(password)) {
      return showErrorMessage(
        "A senha deve conter pelo menos uma letra maiúscula e um dígito."
      );
    }

    const response = await fetchInstance("/users/password", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        password,
        confirm_password: confirmPassword,
      }),
    });

    if (response === null) {
      return router.push("/password-success");
    }

    return showErrorMessage(
      response?.data?.message || "Ocorreu um erro. Tente novamente mais tarde!"
    );
  };

  return (
    <Container>
      <Toast message={errorMessage} isError />
      <Logo />
      <Input isPassword placeholder="Senha" onTextChange={setPassword} />
      <Input
        isPassword
        placeholder="Confirmar Senha"
        onTextChange={setConfirmPassword}
      />
      <Button onClick={handleButtonClick}>Alterar Senha</Button>
    </Container>
  );
}
