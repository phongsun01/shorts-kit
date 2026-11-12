import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Chip } from "../../shared/caption/Chip";
import { STAGE_TOP, PANEL_LEFT } from "../../shared/frame/SafeZones";
import type { SceneComponent } from "../../shared/frame/ShortsTemplate";
import { fade, glide, ramp } from "../../shared/motion/anim";

/** Cosmic Starfield Background */
const CosmicBackground: React.FC<{ speed?: number }> = ({ speed = 1 }) => {
  const frame = useCurrentFrame();
  const stars = React.useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      x: ((i * 137.5) % 1000) + 40,
      y: ((i * 243.7) % 1800) + 60,
      r: (i % 3) + 1.2,
      opacity: 0.3 + ((i % 5) * 0.15),
      pulse: (i % 7) + 5,
    }));
  }, []);

  return (
    <AbsoluteFill style={{ background: "radial-gradient(ellipse at 50% 40%, #0d1333 0%, #050714 60%, #020308 100%)", zIndex: 0 }}>
      <svg width="1080" height="1920" style={{ position: "absolute", top: 0, left: 0 }}>
        {stars.map((s, idx) => {
          const blink = 0.5 + 0.5 * Math.sin((frame * speed) / s.pulse + idx);
          return (
            <circle
              key={idx}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#ffffff"
              opacity={s.opacity * blink}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};

/** Scene 1: Hook - 3 Đại Bí Ẩn Vũ Trụ */
const HookScene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 90 } });
  const rotate = (frame * 0.4) % 360;

  return (
    <AbsoluteFill>
      <CosmicBackground speed={1.2} />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          textAlign: "center",
          width: "90%",
        }}
      >
        {/* Glowing Nebula Ring */}
        <div
          style={{
            margin: "0 auto 30px",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "3px dashed rgba(147, 112, 219, 0.6)",
            boxShadow: "0 0 60px rgba(138, 43, 226, 0.45), inset 0 0 40px rgba(0, 191, 255, 0.3)",
            transform: `rotate(${rotate}deg)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "radial-gradient(circle, #5b21b6 0%, #1e1b4b 70%, transparent 100%)",
              boxShadow: "0 0 35px #8b5cf6",
            }}
          />
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: 6,
            color: "#60a5fa",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          CHƯA CÓ LỜI GIẢI
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#ffffff",
            textShadow: "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(147,51,234,0.6)",
            lineHeight: 1.15,
          }}
        >
          3 ĐẠI BÍ ẨN<br />VŨ TRỤ
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 2: Reason 1 - Vật chất tối & Năng lượng tối (95%) */
const Reason1Scene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = interpolate(frame, [15, 60], [0, 95], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <CosmicBackground />
      <div style={{ position: "absolute", top: STAGE_TOP + 40, left: 70, right: 70, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 24px",
            background: "rgba(239, 68, 68, 0.2)",
            border: "1px solid #ef4444",
            borderRadius: 30,
            color: "#f87171",
            fontWeight: 800,
            fontSize: 26,
            marginBottom: 20,
          }}
        >
          BÍ ẨN SỐ 1
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
          VẬT CHẤT TỐI &amp;<br />NĂNG LƯỢNG TỐI
        </h1>

        {/* 95% Visualization Card */}
        <div
          style={{
            marginTop: 50,
            padding: "40px 30px",
            background: "rgba(15, 23, 42, 0.75)",
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ fontSize: 90, fontWeight: 900, color: "#a855f7", textShadow: "0 0 30px #9333ea" }}>
            {Math.round(progress)}%
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 10, fontWeight: 600 }}>
            Toàn bộ Vũ trụ là vô hình với chúng ta
          </div>

          <div
            style={{
              marginTop: 35,
              height: 24,
              background: "#1e293b",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                borderRadius: 12,
                boxShadow: "0 0 20px #a855f7",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontSize: 22, color: "#64748b" }}>
            <span>0%</span>
            <span>Vật chất tối chiếm 95%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 3: Reason 2 - Điểm kỳ dị bên trong Hố Đen */
const Reason2Scene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const rotate = (frame * 1.2) % 360;

  return (
    <AbsoluteFill>
      <CosmicBackground speed={1.5} />
      <div style={{ position: "absolute", top: STAGE_TOP + 40, left: 70, right: 70, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 24px",
            background: "rgba(245, 158, 11, 0.2)",
            border: "1px solid #f59e0b",
            borderRadius: 30,
            color: "#fbbf24",
            fontWeight: 800,
            fontSize: 26,
            marginBottom: 20,
          }}
        >
          BÍ ẨN SỐ 2
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
          BÊN TRONG HỐ ĐEN<br />THỰC SỰ LÀ GÌ?
        </h1>

        {/* Black Hole Animation */}
        <div style={{ position: "relative", width: 420, height: 420, margin: "60px auto 0" }}>
          {/* Accretion disk */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #ff4500, #ff8c00, #ffd700, #ff4500)",
              transform: `rotate(${rotate}deg)`,
              filter: "blur(12px)",
              opacity: 0.85,
            }}
          />
          {/* Gravitational black core */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: "#000000",
              boxShadow: "0 0 40px #ff6600, inset 0 0 20px #000",
              border: "4px solid rgba(255,255,255,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#ef4444", fontSize: 24, fontWeight: 900, letterSpacing: 2 }}>
              ĐIỂM KỲ DỊ
            </span>
          </div>
        </div>

        <div style={{ marginTop: 50, fontSize: 30, fontWeight: 700, color: "#cbd5e1" }}>
          Mọi định luật vật lý đều sụp đổ!
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 4: Reason 3 - Nghịch lý Fermi */
const Reason3Scene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const radarWave = (frame * 3) % 180;

  return (
    <AbsoluteFill>
      <CosmicBackground />
      <div style={{ position: "absolute", top: STAGE_TOP + 40, left: 70, right: 70, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 24px",
            background: "rgba(16, 185, 129, 0.2)",
            border: "1px solid #10b981",
            borderRadius: 30,
            color: "#34d399",
            fontWeight: 800,
            fontSize: 26,
            marginBottom: 20,
          }}
        >
          BÍ ẨN SỐ 3
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
          NGHỊCH LÝ FERMI
        </h1>

        {/* Radar Scanner Animation */}
        <div style={{ position: "relative", width: 360, height: 360, margin: "50px auto 0" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "2px solid rgba(16, 185, 129, 0.4)",
              background: "rgba(6, 78, 59, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Wave ring */}
            <div
              style={{
                position: "absolute",
                width: radarWave * 2,
                height: radarWave * 2,
                borderRadius: "50%",
                border: "2px solid rgba(52, 211, 153, 0.7)",
                opacity: 1 - radarWave / 180,
              }}
            />
            <div style={{ fontSize: 60 }}>👽❓</div>
          </div>
        </div>

        <div style={{ marginTop: 40, fontSize: 32, fontWeight: 800, color: "#6ee7b7", lineHeight: 1.3 }}>
          "Hàng tỷ hành tinh...<br />Nhưng họ đang ở đâu?"
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 5: Context - Con người chỉ thấy < 5% */
const ContextScene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.08 * Math.sin(frame / 6);

  return (
    <AbsoluteFill>
      <CosmicBackground />
      <div style={{ position: "absolute", top: STAGE_TOP + 60, left: 70, right: 70, textAlign: "center" }}>
        <div style={{ fontSize: 32, color: "#94a3b8", fontWeight: 700, letterSpacing: 4 }}>
          SỰ THẬT ĐÁNG KINH NGẠC
        </div>
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            color: "#38bdf8",
            textShadow: "0 0 40px #0284c7",
            marginTop: 40,
            transform: `scale(${pulse})`,
          }}
        >
          &lt; 5%
        </div>
        <div style={{ fontSize: 36, fontWeight: 700, color: "#f8fafc", marginTop: 20, lineHeight: 1.4 }}>
          Tất cả những gì nhân loại quan sát được trong không gian!
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 6: Payoff - Hạt cát giữa đại dương */
const PayoffScene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const drift = (frame * 0.5) % 100;

  return (
    <AbsoluteFill>
      <CosmicBackground speed={2} />
      <div style={{ position: "absolute", top: STAGE_TOP + 80, left: 70, right: 70, textAlign: "center" }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🌌</div>
        <h2 style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1.3 }}>
          CHỈ NHƯ MỘT HẠT CÁT<br />GIỮA ĐẠI DƯƠNG
        </h2>
        <div style={{ marginTop: 30, fontSize: 30, color: "#cbd5e1", fontWeight: 600, lineHeight: 1.4 }}>
          Càng đi xa, chúng ta càng nhận ra mình chẳng biết gì.
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Scene 7: Share - Call to action */
const ShareScene: SceneComponent = ({ duration, palette }) => {
  const frame = useCurrentFrame();
  const bounce = 1 + 0.05 * Math.sin(frame / 4);

  return (
    <AbsoluteFill>
      <CosmicBackground />
      <div style={{ position: "absolute", top: STAGE_TOP + 60, left: 70, right: 70, textAlign: "center" }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🚀</div>
        <h2 style={{ fontSize: 54, fontWeight: 900, color: "#fff", lineHeight: 1.3 }}>
          LIỆU LOÀI NGƯỜI CÓ THỂ GIẢI MÃ TẤT CẢ?
        </h2>
        <div
          style={{
            marginTop: 60,
            display: "inline-block",
            padding: "20px 48px",
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            borderRadius: 40,
            fontSize: 32,
            fontWeight: 800,
            color: "#ffffff",
            boxShadow: "0 10px 30px rgba(168, 85, 247, 0.5)",
            transform: `scale(${bounce})`,
          }}
        >
          💬 Bình luận ý kiến của bạn!
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Map all scene IDs to their components */
export const scenes: Record<string, SceneComponent> = {
  hook: HookScene,
  reason1: Reason1Scene,
  reason2: Reason2Scene,
  reason3: Reason3Scene,
  context: ContextScene,
  payoff: PayoffScene,
  share: ShareScene,
};
