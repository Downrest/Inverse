const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('math')
		.setDescription("Ask some Math questions!"),
	async execute(interaction) {
    let math = ["1 + 1", "5 - 3", "5x - 3x", "8 * 3", "1 + 9", "2y + 5y", "8 - 10", "1x - 8x", "7 - 3", "6 - 5", "4 x 5", "10x + 5x", "1x + 5x", "1 x -5", "-5 x -3"]

    interaction.reply(math[Math.floor(Math.random() * math.length)]) 
	},
};