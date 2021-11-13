import { SlashCommandBuilder } from '@discordjs/builders'

/**
 * @param {String} name
 * @param {String} description
 * @param {Object} options
 */

const buildCommand = (name, description, options) => {
  if (!options) {
    return new SlashCommandBuilder().setName(name).setDescription(description)
  }
  return new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)
    .addStringOption((option) =>
      option
        .setName(options.name)
        .setDescription(options.description)
        .setRequired(options?.required || false)
    )
}

export default buildCommand