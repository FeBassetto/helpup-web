import ThemeClient from "@/components/ThemeClient";
import { GlobalStyle } from "@/styles/global";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "Helpup",
  description: "Ajude ao próximo! Isso não tem preço.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeClient>
          <GlobalStyle />
          <body>{children}</body>
        </ThemeClient>
      </StyledComponentsRegistry>
    </html>
  );
}
