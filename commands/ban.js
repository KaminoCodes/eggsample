module.exports = {
    name: 'ban',
    description: "ban salty and sour tacos",
    execute(message, args) {
      if(message.member.permissions.has("ADMINISTRATOR"))  {
         const member = message.mentions.users.first();
        if(member){
      const memberTarget = message.guild.members.cache.get(member.id)
      memberTarget.ban();
      message.channel.send("lol they were very bad and got banned")
        }else{
            message.channel.send('no banny of dat person')
        }
      } else {
        message.channel.send('You dont have de right perms lol')
      }
 }
}   