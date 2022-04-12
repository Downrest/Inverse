const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wave')
		.setDescription("Wave to the bot!"),
	async execute(interaction) {
		interaction.editReply("Oh, hello there! 👋")
	},
};