const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ["742361727387041813"]
const adminprefix = "-";
const prefix = "-";
const pairs = require('./channelPairs.json'); // Keep in mind the path may vary
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});


client.on('voiceStateUpdate', (oldMember, newMember) => {
  let oldID;
  let newID;
  if (oldMember.voiceChannel) oldID = oldMember.voiceChannel.id;
  if (newMember.voiceChannel) newID = newMember.voiceChannel.id;

  for (let i = 0; i < pairs.length; i++) {
    const textChannel = newMember.guild.channels.get(pairs[i].text);
    if (!textChannel) {
      console.log('Invalid text channel ID in json.');
      continue;
    }

    const vcID = pairs[i].voice;

    if (oldID !== vcID && newID === vcID) {          // Joined the voice channel.
      textChannel.overwritePermissions(newMember, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      }).catch(console.error);
           client.channels.get("752216422234456084").send(`${newMember}` + " do `=j` to join the queue!");
      
    } else if (oldID === vcID && newID !== vcID) {   // Left the voice channel.
      textChannel.overwritePermissions(newMember, {
        READ_MESSAGES: null,
        SEND_MESSAGES: null
      }).catch(console.error);
          client.channels.get("752216422234456084").send(`=fr ${newMember}`);
    }
  }
});






client.login(process.env.BOT_TOKEN);
