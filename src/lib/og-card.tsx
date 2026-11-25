import { ImageResponse } from "next/og";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#09090B",
          color: "#FAFAFA",
          fontFamily: "sans-serif",
          border: "1px solid #27272A",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "24px",
            borderBottom: "1px solid #27272A",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#FAFAFA",
            }}
          >
            <span>Matheus Araujo</span>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                background: "#2563EB",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              borderRadius: "9999px",
              background: "rgba(37, 99, 235, 0.16)",
              border: "1px solid rgba(37, 99, 235, 0.5)",
              color: "#93C5FD",
              fontSize: "17px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                background: "#2563EB",
              }}
            />
            <span>Disponível para projetos</span>
          </div>
        </div>

        {/* Center headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
            }}
          >
            Engenharia de software e produtos digitais sob medida.
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#A1A1AA",
              lineHeight: 1.45,
            }}
          >
            Matheus Araujo Pereira — Engenheiro de Software Full Stack &amp;
            UI/UX • Aracaju, SE
          </div>
        </div>

        {/* Bottom metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272A",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              "Java & Spring Boot",
              "Angular & Next.js",
              "PostgreSQL & Oracle",
              "UI/UX & Figma",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: "#18181B",
                  border: "1px solid #27272A",
                  color: "#FAFAFA",
                  fontSize: "16px",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#2563EB",
              fontWeight: 600,
            }}
          >
            matharaupere@gmail.com
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
