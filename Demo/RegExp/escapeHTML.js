function unescapeHTML (str) {
    let htmlEntities = {
        nbsp: ' ',
        lt: '<',
        gt: '>',
        quot: '"',
        amp: '&',
        apos: '\''
    }

    return str.replace(/\&([^;]+);/g, (match, key) => {
        if (key in htmlEntities) {
            return htmlEntities[key]
        }
        return match
    })
}

function escapeHTML (str) {
    let escapeChars = {
        '<': 'lt',
        '>': 'gt',
        '"': 'quot',
        '&': 'amp',
        '\'': 'apos'
    }

    return str.replace(new RegExp(`[${Object.keys(escapeChars).join('')}]`, 'g'), match => {
        return `&${escapeChars[match]};`
    })
}

let str = `<h1 class='one'>Hello world</h1>`
let esStr = escapeHTML(str)
let unStr = unescapeHTML(esStr)

console.log(`解析后：${esStr}\n恢复后：${unStr}`)