const git = require('download-git-repo')

git('https://github.com:ektx/CMap#v2', 'tem', err => {
    console.log(err ? err : 'Success')
})

