pipeline {
    agent any
    tools { nodejs 'Node18' }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('MegaLinter') {
            agent {
                docker {
                    image 'oxsecurity/megalinter:beta'
                    args "-u root -e VALIDATE_ALL_CODEBASE=true -v ${WORKSPACE}:/tmp/lint"
                    reuseNode true
                }
            }
            steps {
                sh '/entrypoint.sh'
            }
            post {
                always {
                    archiveArtifacts allowEmptyArchive: true, artifacts: 'mega-linter.log,megalinter-reports/**/*', defaultExcludes: false, followSymlinks: false
                }
            }
        }
        stage('Backend Build') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run lint || true'
                }
            }
        }
        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
