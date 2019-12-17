module.exports = async (con, type) => con.define("hobbies", {
    hobby: type.STRING,
    kid_id: type.INTEGER
})