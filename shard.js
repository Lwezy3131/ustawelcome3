const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./vension.js', { // Buraya botunuzun ana dosyasını yazın sizde değişik görünebilir.(main.js index.js bot.js vs)
    totalShards: 'auto',
    token: (process.env.token)
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);