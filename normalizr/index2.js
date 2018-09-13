// https://yq.aliyun.com/articles/3168

const { normalize, schema } = require('normalizr')

let originData = {
    id: 1,
    title: 'some article',
    isFavorite: false
}

Object.freeze(originData)

// define your article
const article = new schema.Entity('articles')

const normalizedDAta = normalize(originData, article)
// {
//     result: 1,
//     entities: {
//         articles: {
//             1: {
//                 id: 1,
//                 title: 'some article',
//                 isFavorite: false
//             }
//         }
//     }
// }

console.log('normalizedDAta:', JSON.stringify(normalizedDAta, '', '  '))

console.log(originData)