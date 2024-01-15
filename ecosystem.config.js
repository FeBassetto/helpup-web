module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
