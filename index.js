const Discord = require('discord.js')
const client = new Discord.Client();
const conf = require('./conf.json')

client.once('ready', () => {
  console.log('Bot ONLINE');
});
client.login(conf.token);

var annoyingPeople = conf.annoyingPeople
var stop = conf.shutIt
/*client.on('message', message => {
  if (annoyingPeople.includes(message.author.id)) {
    message.channel.send(stop[Math.floor(Math.random()*stop.length)])
  }
});*/

client.on('message', message => {
  if (message.content.includes("friday")) {
  if (message.author.id != 730605550672543825) {
    message.reply(conf.friday[Math.floor(Math.random()*conf.friday.length)], {files: conf.frivid})
  }}
});

client.on('ready', client => {
    var date = new Date();
    console.log(date)
    if (date.getDay() == 5) {
      if (date.getUTCHours() == 7) {
      client.channels.get('730607351505354844').send("@everyone", {files: conf.frivid})
    }}
});

client.on('message', message => {
  if (!message.content.startsWith(conf.prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const com = args.shift().toLowerCase();

  if (!client.commands.has(com)) return;

  const command = client.commands.get(com);

  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('Command not available in DMs!')
  }

  if (command.args && !args.length) {
    let reply = `You need to provide arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nProper usage: \`${conf.prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }

  try {
    commands.execute(message, args)
  } catch (err) {
    console.error(err);
    message.reply('Command is not valid!');
  }
});
