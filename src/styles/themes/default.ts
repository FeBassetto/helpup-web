import { Baloo_2, Montserrat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400"] });
const baloo = Baloo_2({ subsets: ["latin"], weight: ["800"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const defaultTheme = {
  fonts: {
    logo: baloo.style.fontFamily,
    roboto: roboto.style.fontFamily,
    montserrat: montserrat.style.fontFamily,
  },
  colors: {
    "purple-50": "#F5F4FF",
    "purple-100": "#958FFF",
    "purple-300": "#6C63FF",
    "purple-500": "#4039BA",
    "purple-700": "#09009F",
    white: "#ffffff",
    red: "#FF5E5E",
  },
};
