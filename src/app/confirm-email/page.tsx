"use server";

import { fetchInstance } from "@/api/fetch";

import { BasePage } from "@/components/BasePage";

import Icon from "@/assets/svg/confirm.svg";
import ErrorIcon from "@/assets/svg/error.svg";

interface ConfirmEmailParams {
  searchParams: {
    token: string;
    email: string;
  };
}

export default async function ConfirmEmail({
  searchParams,
}: ConfirmEmailParams) {
  const { email, token } = searchParams;

  const response = await fetchInstance("/users/confirm-email", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  });

  const accountIsConfirmed = response?.status === 200;

  const informations = {
    icon: accountIsConfirmed ? Icon : ErrorIcon,
    title: accountIsConfirmed
      ? "Sua conta foi confirmada com sucesso!"
      : "Erro ao tentar confirmar sua conta tente novamente!",
    alt: accountIsConfirmed
      ? "Icone para confirmação de email."
      : "Icone de erro.",
  };

  if (!accountIsConfirmed) {
    const sendNewConfirmationResponse = await fetchInstance(
      "/users/resend-confirmation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    if (sendNewConfirmationResponse.status === 201) {
      informations.title =
        "Não conseguimos confirmar sua conta. Enviamos outro link para seu email!";
    }

    if (sendNewConfirmationResponse?.data?.error) {
      informations.title = sendNewConfirmationResponse.data.message;
    }
  }

  return (
    <BasePage
      buttonText="Página Inicial"
      link="/"
      alt={informations.alt}
      src={informations.icon}
      title={informations.title}
    />
  );
}
