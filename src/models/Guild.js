import mongoose from 'mongoose'

const guildSchema = mongoose.Schema({
  guildId: {
    type: String,
    required: true
  },
  chosenTeam: {
    type: String
  }
})

const Guild = mongoose.model('Guild', guildSchema)

export default Guild
