const Discord = require('discord.js');
const client = new Discord.Client();

  client.on('ready', () => {
  console.log('╚[════════════════════════════════════]╝')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('╚[════════════════════════════════════]╝')
});


client.on("ready", () => {
  const channel = client.channels.get("751355218209407018");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});

client.login(process.env.BOT_TOKEN);
