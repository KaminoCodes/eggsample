module.exports = {
    name: 'help',
    description: "gib u help bish",
    execute(messages, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
.setColor('#00e698')
        .setTitle('Commands')
        .addFields(
            {name: 'Clear', value: 'Clear - Clears messages'},
            {name: 'Help', value: 'Help - Shows this message'},
            {name: 'Ban', value: 'Ban - Bans the mentioned user'},
            {name: 'Kick', value: 'Kick - Kicks the mentioned user'},
            {name: 'Mute', value: 'Mute - Mutes a mentioned user (for an optional amount of time) messages'},
            {name: 'Unmute', value: 'Unmute - Unmutes a mentioned user'},
        )
        .setImage('https://st4.depositphotos.com/4006379/24441/v/950/depositphotos_244417606-stock-illustration-cute-cartoon-vector-tacos-isolated.jpg')
     messages.channel.send(helpEmbed);
    }
}