import { createOgImage } from "@/lib/og-card";

export const alt =
  "Matheus Araujo Pereira — Engenheiro de Software Full Stack & UI/UX Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage();
}
