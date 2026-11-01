import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Villain — the bot you add instead of five";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0e0e0c",
          color: "#f4f1e7",
          fontFamily: "Georgia, serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, background: "#ffe34a" }} />
          Villain
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 0.95 }}>
          <div>The bot you add</div>
          <div style={{ display: "flex" }}>
            <span style={{ background: "#ffe34a", color: "#141414", padding: "0 10px" }}>instead of five.</span>
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#b7b2a6" }}>Moderation, music, tickets, levels, voice.</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
