const mySecret = process.env['TOKEN']
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({});
const keepAlive = require("./server.js");

client.on('ready', async () => {
  let count = 1;

  setInterval(() => {
    const channel = client.channels.cache.get('1090546763271782451');
    channel.send(`spawn ${count}`);
    count++;
  }, 4000)

})

keepAlive();
client.login(mySecret);
