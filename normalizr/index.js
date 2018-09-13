const { normalize, schema } = require('normalizr')

let originData = {
    "id": "123",
    "author": {
        "id": "1",
        "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
        {
            "id": "324",
            "commenter": {
                "id": "2",
                "name": "Nicole"
            }
        }
    ]
}

Object.freeze(originData)

// Define a users schema
const user = new schema.Entity('users')

// define your comments schema
const comment = new schema.Entity('comments', {
    commenter: user
})

// define your article
const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
})

const normalizedDAta = normalize(originData, article)

console.log(normalizedDAta)

normalizedDAta.entities.users['1'].name = 'zwl'
console.log('normalizedDAta', JSON.stringify(normalizedDAta, '', '\t'))
console.log(originData)