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
          background:
            "linear-gradient(135deg, #0F172A 0%, #111E36 55%, #0B1222 100%)",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "440px",
            height: "440px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(37, 99, 235, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-60px",
            width: "380px",
            height: "380px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(5, 150, 105, 0.22) 0%, rgba(5, 150, 105, 0) 70%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: "9999px",
              background: "rgba(37, 99, 235, 0.16)",
              border: "1px solid rgba(59, 130, 246, 0.45)",
              color: "#93C5FD",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Engenharia de Software • Full Stack • UI/UX
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              borderRadius: "9999px",
              background: "rgba(5, 150, 105, 0.16)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#6EE7B7",
              fontSize: "19px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                background: "#10B981",
              }}
            />
            Disponível para Projetos
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
            }}
          >
            Matheus Araujo Pereira
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#60A5FA",
              lineHeight: 1.25,
            }}
          >
            Engenheiro de Software Full Stack & UI/UX Designer
          </div>
          <div
            style={{
              fontSize: "23px",
              color: "#CBD5E1",
              lineHeight: 1.45,
              marginTop: "4px",
            }}
          >
            Sistemas corporativos de alta criticidade, aplicações web sob
            medida, APIs REST e interfaces digitais de alta conversão.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {[
              "Java & Spring Boot",
              "Angular & Next.js",
              "PostgreSQL & Oracle",
              "UI/UX Figma",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  background: "rgba(30, 41, 59, 0.85)",
                  border: "1px solid rgba(148, 163, 184, 0.22)",
                  color: "#E2E8F0",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#94A3B8",
              fontWeight: 500,
            }}
          >
            Aracaju, SE – Brasil
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
