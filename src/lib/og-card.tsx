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
          background: "#141413",
          color: "#F4F3EE",
          fontFamily: "sans-serif",
          border: "1px solid #2E2E2A",
        }}
      >
        {/* Top editorial hairline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "24px",
            borderBottom: "1px solid #2E2E2A",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontFamily: "Georgia, serif",
              fontSize: "34px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#F4F3EE",
            }}
          >
            MAP
            <span style={{ color: "#D96B43" }}>.</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "17px",
              letterSpacing: "0.08em",
              color: "#9E9D96",
            }}
          >
            <span>ENGENHARIA DE SOFTWARE / ARACAJU, SE</span>
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "9999px",
                background: "#4ADE80",
              }}
            />
            <span style={{ color: "#F4F3EE" }}>DISPONÍVEL</span>
          </div>
        </div>

        {/* Center editorial statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "1020px",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "58px",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#F4F3EE",
            }}
          >
            Sistemas críticos e produtos digitais com rigor de engenharia e
            design autoral.
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#9E9D96",
              lineHeight: 1.45,
            }}
          >
            Matheus Araujo Pereira — Engenheiro de Software Full Stack &amp;
            UI/UX Designer
          </div>
        </div>

        {/* Bottom metadata bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2E2E2A",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              "Java 21 & Spring Boot",
              "Angular & Next.js",
              "PostgreSQL & Oracle",
              "Figma & Design Systems",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  background: "#1C1C1A",
                  border: "1px solid #2E2E2A",
                  color: "#F4F3EE",
                  fontSize: "16px",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "17px",
              color: "#D96B43",
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
