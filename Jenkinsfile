pipeline {
  agent {
    docker {
      image "node:10.15.3-stretch"
      args "--name almundo-gui --network nginx -v /var/www/portafolio.josecaceres.info/almundo/dist:/var/jenkins_home/workspace/almundo-gui/dist/browser"
    }
  }
  stages {
    stage ("Build") {
      steps {
        sh "npm install -g @angular/cli@7.3.8"
        sh "npm install"
      }
    }
    stage ("Run") {
      steps {
        sh "npm run build"
      }
    }
    stage ("Next Build") {
      steps {
        input message: "Finished using the web site? (Click \"Proceed\" to continue)"
      }
    }
  }
}