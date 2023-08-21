import moongose from 'mongoose'

const Sports = moongose.model('Sports', {
    name: String,
    qtdPlayers: Number
})

export default Sports