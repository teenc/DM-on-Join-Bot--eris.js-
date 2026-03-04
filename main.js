require('dotenv').config();
const Eris = require('eris');
const bot = new Eris(process.env.TOKEN, {
    intents: ['guilds', 'guildMembers', 'directMessages', 'messageContent']
});

bot.on('ready', () => {
    console.log('bot ready');
});

const embed = {
    description: "**Discord:** <@938889096804319303>\n**Telegram:** https://t.me/snipies",
    color: 0x101010,
    footer: { text: 'hello world' }
}

bot.on("guildMemberAdd", async (guild, member) => {
    const userID = member.user.id;
    const guildID = '1413406229534871554'

    console.log(`${userID} new member has joined ${guildID}`);

    try {
        const dm = await bot.getDMChannel(userID) 
        await dm.createMessage({embed})

        await bot.kickGuildMember(guildID, userID, 'not allowed.')
        console.log(`${userID} kicked from ${guildID}`);
    } catch (error){
        console.error(`${userID} new member has joined ${guildID}:`, error);
    }
});
        
bot.connect(); 