module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'serve',
      args: ['-s', '.'],
      env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: 'true',
      },
    },
  ],
};
