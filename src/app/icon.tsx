import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

const imageBuffer = await readFile(
  join(process.cwd(), "public", "matheus-araujo.png")
);
const photoSrc = `data:image/png;base64,${imageBuffer.toString("base64")}`;

export default function Icon() {
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
          border: "3px solid #2563EB",
          borderRadius: "9999px",
          overflow: "hidden",
          paddingTop: "4px",
        }}
      >
        <img
          src={photoSrc}
          alt="Matheus Araujo Pereira"
          width={58}
          height={58}
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
