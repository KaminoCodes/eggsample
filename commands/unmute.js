module.exports = {
    name: 'unmute',
    description: "unshuddup some peeps",
     execute(message, args) {
      if(message.member.permissions.has("ADMINISTRATOR"))  {
    const target = message.mentions.users.first();
    if(target){
      let mainrole = message.guild.roles.cache.find(role => role.name === 'Fan');
      let muterole = message.guild.roles.cache.find(role => role.name === 'Silenced');
      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.add(mainrole.id);
      memberTarget.roles.remove(muterole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been unsilenced`)
    
    }else{
        message.channel.send('user not in server stoopid');
    }
  }else {
    message.channel.send('You dont have de right perms lol')}
 
 }
}  