module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'node',
      args: ['server.js'],
      env: {
        NODE_ENV: 'production',
        PM2_SERVE_PORT: 3001,
      },
    },
  ],
};
