pipeline {
  agent {
    docker {
      image "node:10.15.3-stretch"
      args "--name almundo-gui --network nginx"
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
        sh "npm run build:ssr"
        sh "npm run serve:ssr&"
      }
    }
    stage ("Next Build") {
      steps {
        input message: "Finished using the web site? (Click \"Proceed\" to continue)"
      }
    }
  }
}