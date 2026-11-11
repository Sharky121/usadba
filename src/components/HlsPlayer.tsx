"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hls?: any;
  }
}

export default function HlsPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = useCallback(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (window.Hls?.isSupported()) {
      const hls = new window.Hls();
      hls.loadSource(src);
      hls.attachMedia(videoEl);
    } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
      videoEl.src = src;
    }
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        id="hlsll-video"
        autoPlay
        muted
        playsInline
        controls
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <Script src="https://cdn.jsdelivr.net/npm/hls.js@1.4.5/dist/hls.min.js" onReady={start} />
    </>
  );
}
