pipeline {
    agent any

    stages {
        stage('build image') {
            steps {
            sh """
               docker ps -aqf "name=/////////"  | xargs --no-run-if-empty docker container rm -f
               docker build -t ////////// .
            """    
            }
            post {
                success {
                     slackSend (color:"#00FF00", message: "Master: Building Image success")
                }
                failure {
                     slackSend (color:"#FF0000", message: "Master: Building Image failure")
                }
           }
        }
        
        
        stage('push image') {
            steps {
                withCredentials([usernamePassword(credentialsId: '////////', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) 
                {
                sh """
                docker login -u ${USERNAME}  -p ${PASSWORD}
                docker push ///////////////
                """
                }
            }
            post {
                success {
                     slackSend (color:"#00FF00", message: "Master: pushing image success")
                }
                failure {
                     slackSend (color:"#FF0000", message: "Master: pushing image failure")
                }
           }
        }
        stage('deploy image') {
            steps {
            sh """
            docker run -d -p 8000:8000 --name=/////// ///////////        
            """
            }
            post {
                success {
                     slackSend (color:"#00FF00", message: "Master: deploying Image success")
                }
                failure {
                     slackSend (color:"#FF0000", message: "Master: deploying Image failure")
                }
           }
        }

    }
}