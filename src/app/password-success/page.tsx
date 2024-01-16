import { BasePage } from "@/components/BasePage";
import Icon from "@/assets/svg/confirm.svg";

export default function PasswordSuccess() {
  return (
    <BasePage
      buttonText="Página Inicial"
      link="/"
      alt="Imagem de senha alterada com sucesso"
      src={Icon}
      title="Sua senha foi alterada com sucesso!"
    />
  );
}
