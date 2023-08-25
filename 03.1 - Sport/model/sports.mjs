import mongoose from "mongoose"

const Sports = mongoose.model('Sports', {
    name: String,
    qtdPlayers: Number
})

export default Sports