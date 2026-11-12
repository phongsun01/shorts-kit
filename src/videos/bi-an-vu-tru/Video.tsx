import React from "react";
import { ShortsTemplate } from "../../shared/frame/ShortsTemplate";
import { DEFAULT_PALETTE } from "../../shared/theme";
import { scenes } from "./scenes";
import { FPS, OUTRO_HOLD, VOICE } from "./timing";
import type { SfxCue } from "../../shared/audio/Sfx";

// Sound cues on transitions and reveals (frames at 30fps)
const SFX_CUES: SfxCue[] = [
  { at: 0, id: "whoosh" },
  { at: 136, id: "pop" },
  { at: 232, id: "ding" },
  { at: 391, id: "boom" },
  { at: 607, id: "glitch" },
  { at: 849, id: "ding" },
  { at: 1006, id: "riser" },
  { at: 1148, id: "pop" },
];

/** The video: shared frame + this video's scenes. `safe` draws the safe zones (stills only). */
export const Video: React.FC<{ safe: boolean }> = ({ safe }) => (
  <ShortsTemplate
    voice={VOICE}
    fps={FPS}
    outroHold={OUTRO_HOLD}
    scenes={scenes}
    palette={DEFAULT_PALETTE}
    safe={safe}
    music={{ src: "music/203_Dramatic ambient music.(1467887).m4a", volume: 0.14, loop: true }}
    sfx={SFX_CUES}
  />
);
