pipeline {
    agent {
        label "ec2-osama"   
    }
    environment {
        MONGO_URL = credentials('mongo-url')
    }
    stages {
        stage("fetch"){
            steps{
                echo "========executing fetch========"
                git branch: "main", url: "https://github.com/KarimElsayad247/sprints-project/"
            }
            post{
                success{
                    echo "========fetch executed successfully========"
                }
                failure{
                    echo "========fetch execution failed========"
                    slackSend (color:"#FF0000", message: "Failed to pull code-base from github")
                    
                }
            }
        }
        stage('docker-compose build') {
            steps {
                echo "========docker-compose build ========"
                sh """
                    docker-compose build
                """    
            }
            post {
                success {
                    echo "========docker-compose build success ========"
                    slackSend (color:"#00FF00", message: "Master: Building Image success")
                }
                failure {
                    echo "========docker-compose build failed========"
                    slackSend (color:"#FF0000", message: "Master: Building Image failure")
                }
           }
        }
        
        
        stage('push image') {
            steps {
                echo "======== Pushing image to registry ========="
                withCredentials([usernamePassword(credentialsId: 'karim-docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) 
                {
                sh """
                docker login -u ${USERNAME}  -p ${PASSWORD}
                docker-compose push
                """
                }
            }
            post {
                success {
                    echo "======== Failed to Pushing image to registry ========="
                    slackSend (color:"#00FF00", message: "Master: pushing image success")
                }
                failure {
                    echo "======== Pushing image to registry was successful ========="
                    slackSend (color:"#FF0000", message: "Master: pushing image failure")
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
