//DARKNOAH
const Discord = require('discord.js');
const client = new Discord.Client();//DARKNOAH

const config = require('./config.json');
//DARKNOAH

client.on('ready', () => {
  console.log('Bot-Online.')
  client.user.setActivity('Verify bot', { type: "PLAYING" })
});
  
  
//DARKNOAH

client.on('message', async message => {
	if (message.content === '!verify') {//DARKNOAH

    let embed = new Discord.RichEmbed()
    .setDescription('React with ✅ to get your role!')//DARKNOAH

    .setColor('ORANGE')
    .setTimestamp()
		const reactmessage = await message.channel.send(embed);
		await reactmessage.react('✅');
//DARKNOAH

		const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });//DARKNOAH

//DARKNOAH

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole(config.roleid);
		});
	}
});
//DARKNOAH

client.on('message', async message => {
	if (message.content === '!READY') {
    let embed = new Discord.RichEmbed()
    .setDescription('React with ✅ to get your role!')
    .setColor('ORANGE')
    .setTimestamp()
		const reactmessage = await message.channel.send(embed);
		await reactmessage.react('✅');
//DARKNOAH

		const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });
//DARKNOAH

		collector.on('collect', async reaction => {//DARKNOAH

			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole(config.roleid);
		});
	}
});
//DARKNOAH

client.on('message', async message => {//DARKNOAH

	if (message.content === '!ve') {
    let embed = new Discord.RichEmbed()
    .setDescription('React with ✅ to get your role!')
    .setColor('ORANGE')
    .setTimestamp()//DARKNOAH

		const reactmessage = await message.channel.send(embed);
		await reactmessage.react('✅');
//DARKNOAH

		const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });
//DARKNOAH

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole ('841010394830209035')
		});
	}
});
//DARKNOAH

//DARKNOAH

client.login(process.env.TOKEN);
//DARKNOAH
