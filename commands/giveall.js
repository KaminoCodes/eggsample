module.exports = {
    name: 'giveall',
    description: 'gives every member a mentioned role',
    execute(message) {
        let role = message.guild.roles.cache.find(role => role.name === "advertiser");
        message.guild.members.cache.forEach(member => member.roles.add(role))
message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`)
    }
}