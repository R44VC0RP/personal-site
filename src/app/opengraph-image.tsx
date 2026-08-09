import { ImageResponse } from "next/og";

export const alt = "Ryan Vogel — Founding Developer at OpenCode";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 20% 10%, #5b21b6 0, #18181b 42%, #09090b 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: 32,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: "68px 76px",
            width: 980,
          }}
        >
          <div style={{ color: "#c4b5fd", display: "flex", fontSize: 28 }}>
            ryan.ceo
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Ryan Vogel
          </div>
          <div
            style={{
              color: "#d4d4d8",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            Founding Developer at OpenCode
          </div>
        </div>
      </div>
    ),
    size,
  );
}
