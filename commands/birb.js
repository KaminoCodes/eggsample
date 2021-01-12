const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const birbDescriptions = [
  'Here is a cute picture of a birb. Yeah I cant see it either. And I\'m a discord bot.',
  'Want to see another picture? Cuz if u do dont ask me lol',
  'How cute is this? Not very... cuz, no picture.',
  'Awww 🥺 theres nothing there!'
];

module.exports = {
  name: 'birb',
  description: 'Shows a picture of a birb.',
  execute(message) {
    fetch('http://image-api.hibirdi.com/image/')
      .then(response => response.json())
      .then(data => {
        const birbMessage = new MessageEmbed()
          .setTitle('Birb Image!')
          .setDescription(birbDescriptions[Math.floor(Math.random() * birbDescriptions.length)])
          .setImage(data.message)
          .setTimestamp(new Date())
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());
        message.reply(birbMessage);
      })
      .catch(err => console.warn(err));
  },
};