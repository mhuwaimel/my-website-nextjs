import {
  Lateef,
  Mada,
  Rakkas,
  Vibes,
  Tajawal,
  Cairo,
  Changa,
  Almarai,
} from "next/font/google";

const lateef = Lateef({
  variable: "--font-lateef",
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const mada = Mada({
  variable: "--font-mada",
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const rakkas = Rakkas({
  variable: "--font-rakkas",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400"],
});

const vibes = Vibes({
  variable: "--font-vibes",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});
const changa = Changa({
  variable: "--font-changa",
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "700", "800"],
});

export { lateef, mada, rakkas, vibes, tajawal, cairo, changa, almarai };
