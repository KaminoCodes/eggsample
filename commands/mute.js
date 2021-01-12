const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "shuddup some peeps",
     execute(message, args) {
      if(message.member.permissions.has("ADMINISTRATOR"))  {
      const target = message.mentions.users.first();
    if(target){
      let mainrole = message.guild.roles.cache.find(role => role.name === 'Member');
      let muterole = message.guild.roles.cache.find(role => role.name === 'Silenced');
      let memberTarget = message.guild.members.cache.get(target.id);

      if(!args[1]){
        memberTarget.roles.remove(mainrole.id);
        memberTarget.roles.add(muterole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been silenced`);
        return
      }
      memberTarget.roles.remove(mainrole.id);
      memberTarget.roles.add(muterole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been silenced for ${ms(ms(args[1]))}`);

      setTimeout(function(){
        memberTarget.roles.add(mainrole.id);
        memberTarget.roles.remove(muterole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unsilenced`)
      }, ms(args[1]));
    
    }else{
        message.channel.send('user not in server stoopid');
    }
  } else {
    message.channel.send('You dont have de right perms lol')}
 }
}