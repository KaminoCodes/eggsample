const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const dogDescriptions = [
  'Here is a cute picture of a dog.',
  'Want to see another picture?',
  'How cute is this?',
  'Awww 🥺',
  'OMG I AM GONNA DIE OF ADORABILITYYYYYYY'
];

module.exports = {
  name: 'doggo',
  description: 'Shows a picture of a dog.',
  execute(message) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        const dogMessage = new MessageEmbed()
          .setTitle('Dog Image!')
          .setDescription(dogDescriptions[Math.floor(Math.random() * dogDescriptions.length)])
          .setImage(data.message)
          .setTimestamp(new Date())
          .setFooter(`Code created by Fro. Thanks! Requested by ${message.author.tag}`, message.author.displayAvatarURL());
        message.reply(dogMessage);
      })
      .catch(err => console.warn(err));
  },
};