module.exports = {
  name: 'args-info',
  description: 'Provided arguments information',
  args: true,
  usage: '<user> <role>',
  execute(message, args) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }
    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
},
module.exports = {
  name: 'ban',
  description: 'Ban a user',
  guildOnly: true,
  execute(message, args) {
    if (args[0] == ) {

    }
  }
}
