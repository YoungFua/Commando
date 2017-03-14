import { stripIndents } from 'common-tags';
import { Message } from 'discord.js';
import { Command, CommandMessage, CommandoClient } from 'discord.js-commando';

module.exports = class AboutCommand extends Command {
	constructor(client: CommandoClient) {
		super(client, {
			name: 'about',
			group: 'info',
			memberName: 'about',
			description: 'Displays information about the command framework.',
			throttling: {
				usages: 2,
				duration: 3
			}
		});
	}

	public async run(msg: CommandMessage): Promise<Message | Message[]> {
		return msg.embed({
			color: 3447003,
			description: stripIndents`
				__**discord.js Commando:**__
				This is the WIP official command framework for discord.js.
				It makes full use of ES2017's \`async\`/\`await\`.

				[Framework GitHub](https://github.com/Gawdl3y/discord.js-commando)
				[Commando bot Github](https://github.com/WeebDev/Commando)

				__**Installation:**__
				**Node 7.0.0 or newer is required.**
				\`npm i -S discord.js-commando\`

				When running a bot using Commando, make sure to run Node with the \`--harmony\` flag.
				Example:
				\`node --harmony somebot.js\`
				\`pm2 start somebot.js --node-args='--harmony'\`

				[Documentation (WIP)](https://discord.js.org/#/docs/commando/)
				[Discord.js Documentation](https://discord.js.org/#/docs/main/)
			`
		});
	}
};
