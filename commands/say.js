module.exports = {
    name: 'say',
    description: "say sumting",
    execute(message, args) {
        let sentmessage = args.splice(1).join(' ');
        if (message.length < 0) return message.channel.send('Please enter a message.');
        message.channel.send(sentmessage);
    }
}