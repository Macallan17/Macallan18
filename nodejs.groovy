job('NodeJS Job') {
    scm {
        git('https://github.com/Macallan17/Macallan18.git') {  node ->
            node / gitConfigName('JS Dev Env')
            node / gitConfigEmail('caster.com@gmail.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs_v10')
    }
    steps {
        shell("npm install")
        shell("npm test")
    }
}
