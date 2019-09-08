const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs')


app.get('/style-test', (req, res, next) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/style-test.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.get('/rocket', (req, res, next) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/rocket.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.listen(9090, () => console.log('Server Webpack online on port 9090'))