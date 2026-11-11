#!/usr/bin/env bash
# Выполняется НА СЕРВЕРЕ после копирования файлов (вызывают scripts/deploy.sh и GitHub Actions).
# Сборка идёт в .next-new и подменяет .next только при успехе: если сборка упала, сайт остаётся на прежней версии.
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH=/root/.nvm/versions/node/v22.23.3/bin:$PATH

echo "${1:-unknown}" > .deployed-commit
npm ci --no-audit --no-fund
rm -rf .next-new
NEXT_DIST_DIR=.next-new NODE_OPTIONS=--max-old-space-size=1024 npm run build

rm -rf .next-old
[ -d .next ] && mv .next .next-old
mv .next-new .next
pm2 startOrRestart ecosystem.config.js --update-env
pm2 save
rm -rf .next-old

# Проверка, что сайт поднялся
for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -fs -o /dev/null http://127.0.0.1:3002/; then echo "Сайт отвечает, версия $(cat .deployed-commit)"; exit 0; fi
  sleep 2
done
echo "Сайт не отвечает после перезапуска" >&2
exit 1
