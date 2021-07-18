//Tokeni .env gizleyin yoksa hesabınız çalınır.

const Discord = require("discord.js")
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

//Aktif

client.on('ready', () => {
  let channel = client.channels.get('kanal id');
  channel.join()
});
