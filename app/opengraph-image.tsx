import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

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
          justifyContent: "center",
          padding: 72,
          background: "#070708",
          color: "#ececee",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.28em",
            color: "#5eead4",
            marginBottom: 32,
          }}
        >
          {site.openGraph.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9494a0",
          }}
        >
          {profile.name} · {site.openGraph.roleLabel}
        </div>
      </div>
    ),
    size,
  );
}
