const Discord = require('discord.js')

module.exports ={
name: '8ball',
description: 'lets see what the magic 8ball says...',
execute(message, args, Discord) {

const answers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ];

// Runs if user doesn't ask a question
const embed = new Discord.MessageEmbed()
.setTitle('🎱  The Magic 8-Ball Says  🎱')
.setDescription(`${answers[Math.floor(Math.random() * answers.length)]}`)
.setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp()
.setColor(message.guild.me.displayHexColor);
message.channel.send(embed);
}
}