module.exports = {
    name: 'kick',
    description: "kick sour tacos",
    execute(message, args) {
      if(message.member.permissions.has("ADMINISTRATOR"))  {
  const member = message.mentions.users.first();
  if(member){
const memberTarget = message.guild.members.cache.get(member.id)
memberTarget.kick();
message.channel.send("lol they were bad and got kicked")
  }else{
      message.channel.send('no kicky of at person')
  }
} else {
  message.channel.send('You dont have de right perms lol')}
 
 }
}   