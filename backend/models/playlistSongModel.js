const mongoose = require('mongoose')

const playlistSongSchema = new mongoose.Schema({
    playlistOrder: {
        type: Number,
        required: true
    },
    song: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Song'
    },
    playlist: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Playlist'
    }
})

const PlaylistSong = mongoose.model('PlaylistSong', playlistSongSchema)

module.exports = PlaylistSong