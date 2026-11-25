import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const imageBuffer = await readFile(
  join(process.cwd(), "public", "matheus-araujo.png")
);
const photoSrc = `data:image/png;base64,${imageBuffer.toString("base64")}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#09090B",
          border: "6px solid #2563EB",
          borderRadius: "9999px",
          overflow: "hidden",
          paddingTop: "10px",
        }}
      >
        <img
          src={photoSrc}
          alt="Matheus Araujo Pereira"
          width={168}
          height={168}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
