const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoisjoe')
		.setDescription("Who even is Joe?"),
	async execute(interaction) {
		interaction.reply("Joe mama. 😂")
	},
};