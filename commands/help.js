const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription("Lists all of the available commands!"), 

	async execute(interaction) {
		let embed = new MessageEmbed()
    .setTitle("Hello there!")
    .setDescription("*Thank you for using Inverse!* \n\nInverse is simple and easy to use, lightweight, and open-source Discord bot! This bot was developed by <@744509693392846910>.")
    .setThumbnail('https://i.imgur.com/CzMLO6g.png')
    .setFooter('Inverse', 'https://i.imgur.com/h60zCmi.png');

    interaction.reply({ embeds: [embed] });
	},
};