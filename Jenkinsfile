pipeline {
    agent any

    stages {
        stage("fetch"){
            steps{
                echo "========executing fetch========"
                git branch: "main", url: "https://github.com/KarimElsayad247/sprints-project/"
            }
            post{
                success{
                    echo "Git repo fetched"
                }
                failure{
                    echo "Failed Failed to pull code-base from githu"
                    slackSend (color:"#FF0000", message: "Failed to pull code-base from github") 
                }
            }
        }
        stage('docker-compose pull') {
            steps {
                echo "Pulling image from dockerhub repo"
                sh """
                    docker-compose pull
                """    
            }
            post {
                success {
                    echo "Image pulled successfully"
                }
                failure {
                    echo "Failed to pull image from dockerhub repo"
                    slackSend (color:"#FF0000", message: "Master: Failed to pull image from dockerhub repo")
                }
           }
        }
        stage('deploy image') {
            steps {
                echo "Deploying app"
                sh """
                    docker-compose up
                """
                }
            post {
                success {
                    echo "App deployed successfully"
                    slackSend (color:"#00FF00", message: "Master: deploying Image success")
                }
                failure {
                    echo "failed to deploy app"
                    slackSend (color:"#FF0000", message: "Master: deploying Image failure")
                }
           }
        }
    }
}
