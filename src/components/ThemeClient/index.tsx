"use client";

import { defaultTheme } from "@/styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
