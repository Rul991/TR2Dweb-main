const $ = (id, doc = document) => doc.querySelector(id)
const all$ = (id, doc = document) => doc.querySelectorAll(id)

const readFile = (src, callback = data => {}, type = 'text') => fetch(src).then(res => res[type]()).then(data => callback(data))
const readTextFromFile = (src, callback) => readFile(src, callback, 'text')
const readJSONFromFile = (src, callback) => readFile(src, callback, 'json')
