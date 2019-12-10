const inquirer = require('inquirer')
const inquirerFileTreeSelection = require('./bin/getFileTree')

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

inquirer
  .prompt([
    {
      type: 'file-tree-selection',
      name: 'file',
      message: 'choose a file',
      validate (val) {
        console.log(val)
        if (val.extension !== '.vue') {
          return '文件不是vue文件'
        }

        return true
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, '', '  '))
  });