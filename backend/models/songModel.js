const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Genre'
    }, 
    album: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Album'
    }, 
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Artist'
    },
    duration: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            let arr = value.split(":")
            if(arr[2]) {
                throw new Error('Maximum Duration for a Song is 59 minutes')
            }
            if(arr[0]>59) {
                throw new Error('Maximum Duration for a Song is 59 minutes')
            }
            if(arr[1]>59) {
                throw new Error('Invalid input')
            }
        }
    },
    totalPlays: {
        type: Number,
        default: 0,
        required: true
    }, 
    playsByUser: {
        type: Number,
        default: 0,
        required: true
    },
    isLiked: {
        type: Boolean,
        default: false,
        required: true
    }, 
    mp3: {
        type: Buffer
    }
}, {
    timestamps: true
})