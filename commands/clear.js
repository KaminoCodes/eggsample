module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
    if(message.member.permissions.has("MANAGE_MESSAGES"))  {
        if (!args[0]) return message.reply("gimmie an amount to delete stoopid");
 
        if(isNaN(args[0])) return message.reply("a **number** idiot");
 
        if(args[0] > 100) return message.reply("NOT THAT MANY MESSAGES BRO");
        
        if(args[0] < 1) return message.reply("...if u dont want me to delete a message DONT ASK ME TO DELETE A MESSAGE");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
} else {
    message.channel.send('You dont have de right perms lol')}
 
 }
}   