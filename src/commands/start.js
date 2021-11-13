import { SlashCommandBuilder } from '@discordjs/builders'

module.exports = {
  data: new SlashCommandBuilder().setName('start').setDescription('Initializes this bot by choosing which side.'),
  async execute(interaction) {
    await interaction.reply('pakyu')
  }
}

