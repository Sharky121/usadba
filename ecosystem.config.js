// PM2: запуск production-сборки на сервере (nginx проксирует на 127.0.0.1:3002)
module.exports = {
  apps: [{
    name: "ushmor",
    script: "npm",
    args: "start -- -H 127.0.0.1",
    env: {
      NODE_ENV: "production",
      PORT: 3002,
    },
  }],
};
