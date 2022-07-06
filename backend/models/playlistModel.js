const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: 'true'
    }, 
    lastPlayed: {
        type: Date,
        required: true
    },
    isPinned: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

playlistSchema.virtual('playlists', {
    ref: 'Playlist',
    localField: '_id',
    foreignField: 'playlist'
})

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist