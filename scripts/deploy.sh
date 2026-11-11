#!/usr/bin/env bash
# Ручная выкладка с компьютера на сервер ihc-sharky (см. ~/.ssh/config), вместе с видео из public/video.
# Обычно не нужна: пуш в ветку nextjs выкладывается автоматически (.github/workflows/deploy.yml).
# Запуск: npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."
HOST=${DEPLOY_HOST:-ihc-sharky}
DIR=/var/www/ushmor

rsync -az --delete \
  --exclude node_modules --exclude '.next*' --exclude .git --exclude .github --exclude .claude --exclude .DS_Store \
  --exclude '.env*' --exclude next-env.d.ts --exclude '*.tsbuildinfo' --exclude .deployed-commit \
  ./ "$HOST:$DIR/"

ssh "$HOST" "bash $DIR/scripts/remote-build.sh $(git rev-parse --short HEAD)"
