const fs = require('fs');
const path = require('path')
const os = require('os')

// 泰拉瑞亚 MacOS 存档位置
const address = path.join(os.homedir(), '/Library/Application Support/Terraria/Worlds/')

fs.readdir(address, (err, files) => {
  if (err) {
    return console.log(err)
  }

  console.log(files)
})

let readSteam = fs.createReadStream(`${address}abc.wld`)

for (let i = 1; i <= 5; i++) {
  let writeSteam = fs.createWriteStream(`${address}abc${i}.wld`)
  
  readSteam.pipe(writeSteam)
}