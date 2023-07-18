pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        GIT_REPO_URL = "https://github.com/rizkypanz16/jenkins-lerna-monorepo.git"
        GIT_BRANCH = "main"
    }
    
    stages {
        stage('Code Checkout') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO_URL}"
            }
        }
        
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'ls'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Deploy Code') {
            steps {
                sh '''
                npm run start:be
                npm run start:fe
                '''
            }
        }
    }
}
