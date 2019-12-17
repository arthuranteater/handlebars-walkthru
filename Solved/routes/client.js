module.exports = (app, tables) => {

    const kids = tables[0]
    const parents = tables[1]
    const hobbies = tables[2]

    app.get("/", function (req, res) {
        kids.findAll({ raw: true }).then(data => {
            const length = data.length
            res.render("index", { kids: data, length: length })
            console.log('data sent to frontend', data, length)
        })
    })
}