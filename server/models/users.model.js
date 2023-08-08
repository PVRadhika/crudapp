const {default:mongoose} = require('mongoose')


module.exports = (mongoose) => {
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
phone: {
        type: Number,
        require: true,
    }
})


const UserModel = mongoose.model('users', UserSchema)
return UserModel;
}
