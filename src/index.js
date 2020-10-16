const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = "matches.csv"

csvtojson().fromFile(csvfilepath)
.then((json) => {
    console.log(json)
    fs.writeFileSync('matches.json', JSON.stringify(json), "utf-8", (err) => {
        if (err) console.log(err)
    })
})
