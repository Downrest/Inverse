const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription("Lists all of the available commands!"),

  async execute(interaction) {
    const embed1 = new MessageEmbed()
      .setImage('https://i.imgur.com/C7s39Ud.png');

    const embed2 = new MessageEmbed()
      .setDescription("*Thank you for using Inverse!* \n\nInverse is simple and easy to use, fun, and open-source Discord bot! \nThis bot was developed by <@744509693392846910>.");

    const embed3 = new MessageEmbed()
      .addFields(
        { name: "Commands", value: "/help - *Lists all the available commands.*\n\n/math - *Sends you randomized Math questions.*\n/trivia - *Sends you randomized trivias.*\n/wave - *Say hello to the bot!*\n/animals - *Sends you images of random animals.*", inline: true },
      )
      .setFooter('Inverse', 'https://i.imgur.com/h60zCmi.png');

    interaction.editReply({ embeds: [embed1, embed2, embed3] });
  },
};