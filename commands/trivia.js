const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('trivia')
		.setDescription("Ask for a trivia!"), 

	async execute(interaction) {
    let trivias = ["The hashtag symbol is technically called an octothorpe.", "Some cats are actually allergic to people.", "The 'unicorn' is the national animal of Scotland.", "The voices of Mickey and Minnie Mouse got married in real life.", "The largest known living organism is an aspen grove.", "M&M stands for Mars and Murrie.", "You can hear a blue whale's heartbeat from more than 2 miles away.", "A baby puffin is called a 'puffling.", "A lyrebird can mimic almost any sounds it hears, including chainsaws.", "Pumpkins, squash and gourds are all technically the same species.", "You can major in wine at Cornell University.", "There's a world record for the most world record titles.", "There are over 10 holidays that celebrate chocolate.", "Chocolate is (kinda) a fruit.", "A group of bunnies is called a 'fluffle.'", "The moon has its own time zones.", "A team of six women programmed the first digital computer.", "Baby elephants suck their trunks for comfort.", "There's a 107-acre forest made up of a single tree."]

		let embed = new MessageEmbed()
    .setTitle("Did you know..?")
    .setDescription(trivias[Math.floor(Math.random() * trivias.length)])
    .setFooter('Inverse', 'https://i.imgur.com/h60zCmi.png');

    interaction.reply({ embeds: [embed] });
	},
};