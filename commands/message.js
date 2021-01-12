module.exports = {
    name: 'message',
    description: "message a member.",
    execute(message, args, Discord){
let sentmessage = args.splice(1).join(' ');
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.channel.send("You must mention the user you are going to message.").catch(console.error);
if (message.length < 1) return message.channel.send('Please enter a message.');
const embed = new Discord.MessageEmbed()
.setAuthor("You have been sent a message!", message.author.avatarURL)
.setDescription(`${message.author.tag} has sent you a private message!`)
.addField("User", message.author.tag)
.addField("Message", sentmessage)
.setFooter("How to send a message back. Go to any sever that has this same person and do (message @user Message here")
.setColor(message.guild.me.displayHexColor)
user.send({embed, embed}).then(message.channel.send("Message Sent!"))
    }
}