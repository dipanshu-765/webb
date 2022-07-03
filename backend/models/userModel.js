const mongoose = require('mongoose')

validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add an email'],
        validate: [validateEmail, 'Please enter a valid email address'],
        unique: [true, 'Email already taken']
    },
    password: {
        type: String,
        trim: true, 
        required: [true, 'Please enter a password']
    },
    playlists: {                          //Array of Playlist ids created by the user
        type: Array
    },
    following: {                          //Array of Artists ids followed by the user
        type: Array
    },
    tokens: {                             //Array of JWT tokens
        type: Array
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)