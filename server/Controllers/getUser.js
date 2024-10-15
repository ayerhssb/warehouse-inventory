const user = require("../Models/User");

const getAllUsers = async (req, res) => {

    const myData = await user.find({name: "user1"});
    res.status(200).json({myData});
}

module.exports = getAllUsers;