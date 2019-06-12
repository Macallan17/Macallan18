job('NodeJS Job') {
    scm {
        git('https://github.com/Macallan17/devops_sample_nodejs.git') {  node ->
            node / gitConfigName('DSL User')
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
