const UserModel = require("../models/user")

const addNewUser = async (options) => {
    try {
        const { full_name, phone_number } = options
        const newUser = new UserModel({
            full_name,
            phone_number
        })
        const savedUser = await newUser.save()

        return savedUser
    } catch (error) {
        throw new Error("Internal ServerError")
    }
}

const getAllUser = async () => {
    const users = await UserModel.find()
    return users
}

const deleteOneUser = async (id) => {
    const deletedUser = await UserModel.findByIdAndRemove(id)

    return deletedUser
}

const getOneUser = async (id) => {
    const user = await UserModel.findById(id)
    return user;
}

const updateOneUser = async (options) => {
    const { id, user } = options

    const updatedUser = await UserModel.findByIdAndUpdate(id, { $set: user })
    return updatedUser
}

module.exports = {
    addNewUser,
    getAllUser,
    deleteOneUser,
    getOneUser,
    updateOneUser
}