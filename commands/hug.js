module.exports = {
    name: 'hug',
    description: "hugs 🤗",
    execute(messages, args, Discord){
        const target = messages.mentions.users.first();
        const Embed = new Discord.MessageEmbed()
.setColor('#00e698')
        .setTitle('hug')
        .description('You have been hugged by <@$messages.author.id>!')
     messages.target.send(Embed);
    }
}