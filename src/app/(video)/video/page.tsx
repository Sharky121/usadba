import HlsPlayer from "@/components/HlsPlayer";

export const metadata = { title: "RTSPtoWeb HLS-LL example" };

const HLSLL_URL = "https://www.rmpts.ru:8084/pages/player/hls/0cdeaea0-5169-4e7d-ac13-9cc6ace490e5/0";

/** Порт video.html — тестовый HLS-LL плеер. */
export default function VideoPage() {
  return (
    <>
      <h1>RTSPtoWeb HLS-LL example</h1>
      <input type="hidden" name="hlsll-url" id="hlsll-url" value={HLSLL_URL} />
      <HlsPlayer src={HLSLL_URL} />
    </>
  );
}
