#!/usr/bin/env bash
# Выкладка на сервер ihc-sharky (см. ~/.ssh/config): копирование файлов, сборка, перезапуск PM2.
# Запуск: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."
HOST=ihc-sharky
DIR=/var/www/ushmor
NODE_BIN=/root/.nvm/versions/node/v22.23.3/bin

rsync -az --delete \
  --exclude node_modules --exclude .next --exclude .git --exclude .claude --exclude .DS_Store \
  --exclude '.env*' --exclude next-env.d.ts --exclude '*.tsbuildinfo' --exclude .deployed-commit \
  ./ "$HOST:$DIR/"

ssh "$HOST" "export PATH=$NODE_BIN:\$PATH; cd $DIR \
  && echo $(git rev-parse --short HEAD) > .deployed-commit \
  && npm ci --no-audit --no-fund \
  && NODE_OPTIONS=--max-old-space-size=1024 npm run build \
  && (pm2 restart ushmor --update-env || pm2 start ecosystem.config.js) && pm2 save"
