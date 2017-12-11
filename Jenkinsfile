node {
    stage('Initialize') {
        echo 'Initializing...'
        def node = tool name: 'NodeJS-8.2.1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
    }

    stage('Checkout') {
        echo 'Getting source code...'
        checkout scm
    }

    stage('Build') {
        echo 'Building dependencies...'
        sh 'npm i'
    }

    stage('Test') {
        echo 'Testing...'
        bitbucketStatusNotify(
          buildState: 'INPROGRESS',
          buildKey: 'test',
          buildName: 'Test'
        )
        try {
            sh 'npm test'
            bitbucketStatusNotify(
              buildState: 'SUCCESSFUL',
              buildKey: 'test',
              buildName: 'Test'
            )
        } catch(Exception e) {
            bitbucketStatusNotify(
              buildState: 'FAILED',
              buildKey: 'test',
              buildName: 'Test',
              buildDescription: 'Something went wrong with tests!'
            )
        }
    }

    stage('Publish') {
        echo 'Publishing Test Coverage...'
		publishHTML (target: [
			allowMissing: false,
			alwaysLinkToLastBuild: false,
			keepAll: true,
			reportDir: 'test_coverage',
			reportFiles: 'index.html',
			reportName: "Application Test Coverage"
		])
    }

}
