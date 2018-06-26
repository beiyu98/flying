const APP_NAME = 'app';
module.exports = {
  apps: [
    {
      name: APP_NAME,
      script: 'app.js',
      env: {
        NODE_ENV: 'dev'
      },
      env_prod: {
        NODE_ENV: 'prod'
      },
      append_env_to_name: true,
      disable_logs: true,
      output: `~/logs/${APP_NAME}-out.log`,
      error: `~/logs/${APP_NAME}-error.log`,
      max_memory_restart: '1G',
      exec_mode: 'cluster',
      instances: 'max',
      kill_timeout: 1600
    }
  ],
  deploy: {
    prod: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env prod',
      env: {
        NODE_ENV: 'prod'
      }
    }
  }
};
