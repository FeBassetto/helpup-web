"use client";

import Link from "next/link";
import { LogoText } from "./styles";

export function Logo() {
  return (
    <Link href="/">
      <LogoText>Help up</LogoText>
    </Link>
  );
}
