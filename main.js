require('dotenv').config();
const Eris = require('eris');
const bot = new Eris(process.env.TOKEN, {
    intents: ['guilds', 'guildMembers', 'directMessages', 'messageContent']
});

bot.on('ready', () => {
    console.log('bot ready');
});


bot.on("guildMemberAdd", (guild, member) => {
    let new_members = member.user.id;
    console.log(`${new_members} new member has joined ${guild.name}`);
});

bot.on('getDMChannel', (new_members) => {
    console.log('got it');
});

bot.connect(); 