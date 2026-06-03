pipeline {
      agent any

      // 对应你 freestyle 里的 Poll SCM：每 2 分钟轮询一次 GitHub
      triggers {
          pollSCM('H/2 * * * *')
      }

      environment {
          // 对应 freestyle 里的 export PATH，让 shell 能找到 node/npm
          PATH = "/usr/local/bin:${PATH}"
          // 部署目标目录，抽出来当变量，改起来方便
          DEPLOY_DIR = "/opt/homebrew/var/www/vue-learn-project"
      }

      options {
          // 只保留最近 10 次构建记录，避免日志/产物占满磁盘
          buildDiscarder(logRotator(numToKeepStr: '10'))
          // 整条流水线超时保护，卡住超过 20 分钟自动失败
          timeout(time: 20, unit: 'MINUTES')
      }

      stages {
          stage('拉取代码') {
              steps {
                  git branch: 'master',
                      url: 'https://github.com/leleares/vue-learn-project.git',
                      credentialsId: 'leleares-github'
              }
          }

          stage('安装依赖') {
              steps {
                  echo '安装依赖'
                  sh 'npm ci'
              }
          }

          stage('打包') {
              steps {
                  echo '打包'
                  sh 'npm run build'
              }
          }

          stage('部署到 Nginx') {
              steps {
                  echo '部署'
                  sh 'rsync -a --delete dist/ "$DEPLOY_DIR/"'
              }
          }
      }

      post {
          success {
              echo '✅ 构建并部署成功，刷新 http://localhost:8080 查看'
          }
          failure {
              echo '❌ 构建失败，请查看上面的日志'
          }
      }
}