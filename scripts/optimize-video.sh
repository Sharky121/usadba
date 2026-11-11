#!/usr/bin/env bash
# Пережатие видео в public/video для веба: H.264 (CRF), не больше 1080p, moov в начале файла (faststart).
# Фоновое видео (wedding.mp4) — без звука и с более сильным сжатием.
# Файл заменяется, только если результат меньше. Запуск: npm run optimize:video [-- файл.mp4 ...]
set -euo pipefail
cd "$(dirname "$0")/../public/video"

files=("$@")
[ ${#files[@]} -eq 0 ] && files=(*.mp4)

for f in "${files[@]}"; do
  tmp="${f%.*}.tmp.mp4"
  if [ "$f" = "wedding.mp4" ]; then
    opts=(-crf 28 -an)
  else
    opts=(-crf 24 -c:a aac -b:a 128k)
  fi
  ffmpeg -hide_banner -loglevel error -y -i "$f" \
    -vf "scale='min(1920,iw)':-2" -c:v libx264 -preset slow -profile:v high -pix_fmt yuv420p \
    "${opts[@]}" -movflags +faststart "$tmp"
  old=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f")
  new=$(stat -f%z "$tmp" 2>/dev/null || stat -c%s "$tmp")
  if [ "$new" -lt "$old" ]; then
    mv "$tmp" "$f"
    echo "$f: $((old / 1048576)) МБ → $((new / 1048576)) МБ"
  else
    rm "$tmp"
    echo "$f: без изменений"
  fi
done
