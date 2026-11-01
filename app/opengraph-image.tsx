import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Villain — Less bot clutter. More control.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px 88px", color: "#ededee", background: "radial-gradient(ellipse at 78% 38%, rgba(90,26,32,.17), transparent 43%), #060607", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 58, height: 58, borderRadius: 14, border: "1px solid #393033", background: "#111113", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, fontWeight: 700 }}>V</div>
        <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: 6 }}>VILLAIN</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -4 }}>Less bot clutter.</div>
        <div style={{ fontSize: 76, fontWeight: 400, letterSpacing: -4, color: "#a0a0a6" }}>More control.</div>
      </div>
      <div style={{ fontSize: 18, letterSpacing: 3, color: "#6b6b72" }}>MODERATION · PROTECTION · COMMUNITY</div>
    </div>,
    { width: 1200, height: 630 }
  );
}
