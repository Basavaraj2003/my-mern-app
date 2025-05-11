pipeline {
    agent any
    tools { nodejs 'Node18' }
    stages {
        stage('Checkout') {
            steps { checkout scm }
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
