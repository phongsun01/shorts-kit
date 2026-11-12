import React from "react";
import { AbsoluteFill } from "remotion";
import { COVER_BAND, PANEL_LEFT, PANEL_MAX_W } from "../../shared/frame/SafeZones";
import { SafeCheck } from "../../shared/frame/SafeCheck";
import { DEFAULT_PALETTE, FONT } from "../../shared/theme";

const p = DEFAULT_PALETTE;

export const Cover: React.FC<{ safe: boolean }> = ({ safe }) => (
  <SafeCheck safe={safe} cover>
    <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 45%, #1e1b4b 0%, #030712 100%)" }}>
      <div
        style={{
          position: "absolute",
          left: PANEL_LEFT,
          width: PANEL_MAX_W,
          top: COVER_BAND.top + 200,
          textAlign: "center",
          fontFamily: FONT.sans,
          color: p.text,
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: 6, color: "#60a5fa" }}>BÍ ẨN KHÔNG GIAN</div>
        <div style={{ fontSize: 300, fontWeight: 900, lineHeight: 1, color: "#a855f7", textShadow: "0 0 50px #9333ea" }}>03</div>
        <div style={{ fontSize: 84, fontWeight: 900, color: "#ffffff", textShadow: "0 0 30px rgba(255,255,255,0.4)" }}>BÍ ẨN VŨ TRỤ</div>
      </div>
    </AbsoluteFill>
  </SafeCheck>
);
