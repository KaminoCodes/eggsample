module.exports = {
    name: 'Leave',
    description: "Leave",
    execute(message, args) {
        message.author.kick();
    }
}