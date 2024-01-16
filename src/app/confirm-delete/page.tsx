import { fetchInstance } from "@/api/fetch";
import { BasePage } from "@/components/BasePage";

import Icon from "@/assets/svg/confirm.svg";
import ErrorIcon from "@/assets/svg/error.svg";

interface ConfirmDeleteParams {
  searchParams: {
    token: string;
    deleteData: string;
  };
}

export default async function ConfirmDelete({
  searchParams,
}: ConfirmDeleteParams) {
  const { deleteData, token } = searchParams;

  const deleteResponse = await fetchInstance("/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      deleteData: deleteData === "true",
    }),
  });

  const isDeleted = deleteResponse === null;

  const informations = {
    title: isDeleted
      ? "Sua conta foi deletada com sucesso!"
      : deleteResponse?.data?.message,
    icon: isDeleted ? Icon : ErrorIcon,
    alt: isDeleted ? "Icone para confirmação de email" : "Icone de erro",
  };

  return (
    <BasePage
      alt={informations.alt}
      buttonText="Página Inicial"
      link="/"
      src={informations.icon}
      title={informations.title}
    />
  );
}
