const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: false,
    },
}, { timestamps: true}

);

const UserLogin = mongoose.models.UserLogin || mongoose.model('UserLogin', usersSchema, 'Login-Details');

module.exports = UserLogin;