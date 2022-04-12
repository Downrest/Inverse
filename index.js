/* 
 * [INDEX.JS]
 * 
 * An important and necessary file that runs the bot.
*/

/** Variables */
const express = require("express");
const app = express();
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config()


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/** Logs */
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.data.name, command);
}
client.on('ready', () => {
	console.log("Inverse has logged in!");
});

app.get("/", (req, res) => {
	res.send("Inverse has been initiated!")
})

/** Commands */
client.on('interactionCreate', async interaction => {
	//we do this to tell discord we responded to the interaction
	interaction.reply("Thinking...")
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

/** Token + Listen */
client.login(process.env.clientToken)

app.listen(3000, () => {
	console.log("Inverse is ready!")
})
