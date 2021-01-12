const Discord = require('discord.js');
const client = new Discord.Client(); 
 
const prefix = '%';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('MCE is Online!');
    client.user.setActivity('in my birb cage UwU', { type: ''});
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 //Cmd handler
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if(command === 'mc'){
        client.commands.get('mc').execute(message, args, Discord);
    }else if(command === 'message'){
        client.commands.get('message').execute(message, args, Discord);
    }else if(command === 'say'){
        client.commands.get('say').execute(message, args);
    }else if(command === 'owo'){
        client.commands.get('owo').execute(message, args);
    }else if(command === '8ball'){
        client.commands.get('8ball').execute(message, args, Discord);
    }else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }else if(command === 'doggo'){
        client.commands.get('doggo').execute(message);
    }else if(command === 'birb'){
        client.commands.get('birb').execute(message, args);
    }else if(command === 'giveall'){
        client.commands.get('giveall').execute(message, args);
    }
    });

























//Welcome msg
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('706920373433925642').send(`Hey <@${guildMember.user.id}>, welcome to Minecult Earth! Please read the announcements and fill out an application at https://minecultearth.netlify.app/apply.htm. Please also consider donating at https://minecultearth.netlify.app/donate.htm`)
});

//Join Role
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
})
//login
client.login('Nzg4NDY5OTU2MDYwNjQzNDMx.X9j93g.-XOBdQig9QYzC3Dys1Fjbc3LjDA');