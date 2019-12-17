module.exports = async (con, type) => con.define("parents", {
    parent_name: type.STRING,
    kid_id: type.INTEGER
})

