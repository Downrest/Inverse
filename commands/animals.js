const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('animals')
		.setDescription("Sends images of random animals."),
	async execute(interaction) {
		const animals = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCDZRfScRGjupERkSrXd-XnqNVXz096kS098HCrBhbXDVdl7WYNl_zy16WxEzkhFVWZQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XMo_B74gL9ETwdKJ78JgJ4kudwHLjd7u_jdkDb4l0tx5Ux5UBWjX5GFmPfXMc-e-9aw&usqp=CAU", "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/may-27-2019-photo-taken-on-may-25-2019-shows-baby-giant-news-photo-1584131118.jpg", "https://i.natgeofe.com/k/c02b35d2-bfd7-4ed9-aad4-8e25627cd481/komodo-dragon-head-on_2x1.jpg", "https://www.juiice.com/content/566/5f4005cc7e70c.jpg", "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337", "https://cdn.britannica.com/w:1100/80/140480-131-28E57753/Dromedary-camels.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdmi9zU6KBKyXrHdhJRzGu-m-CfoEEWx6Jdz32nvvMWRcTCKe3uO3XG3wepxo1WERmmw&usqp=CAU"]

		const embed = new MessageEmbed()
			.setTitle("Take a look at this animal!")
			.setImage(animals[Math.floor(Math.random() * animals.length)])
			.setFooter('Inverse', 'https://i.imgur.com/h60zCmi.png');

		interaction.reply({ embeds: [embed] });
	},
};