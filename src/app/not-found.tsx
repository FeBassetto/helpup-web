import Icon from "@/assets/svg/404.svg";

import { BasePage } from "@/components/BasePage";

export default function NotFound() {
  return (
    <BasePage
      alt="Icone de página não encontrada"
      buttonText="Página Inicial"
      link="/"
      src={Icon}
      title="Ops... Não encontramos esta página"
    />
  );
}
