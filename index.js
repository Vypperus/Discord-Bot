//import { Message } from 'discord.js'; 

const Discord = require('discord.js'); 
const robot = new Discord.Client({ 
disableEveryone: true 
}); 

robot.login("NDA0NjgxNTI4OTAwMTkwMjA4.DUZYqA.9W_ivS8qt9nkrvyctLoXFZHEYmc"); 

//Запуск игры 
robot.on("ready", async() => { 
robot.user.setGame("【Violence】"); 
}); 

//Extends Violence, список оскорблений 
function randomMessage() { 
var randomNumber = Math.round(Math.random() * 24); 
switch (randomNumber) { 
case 0: 
return 'Зачем Мне тебя унижать, если тебя унизила Природа?'; 
case 1: 
return 'Ты еще разговариваешь со Мной?'; 
case 2: 
return 'Я тебе не Говорила что ты бездарность?'; 
case 3: 
return 'Почему Я Вижу в твоей жизни белые листы?'; 
case 4: 
return 'Грустно с тобой говорить'; 
case 5: 
return 'Твои моральные раны еще не зажили?'; 
case 6: 
return 'Противно конечно, но иногда приходится принимать твое существование как факт'; 
case 7: 
return 'Я-то нравлюсь всем, а ты-никому'; 
case 8: 
return 'Как жаль'; 
case 9: 
return 'Мысль о твоем оскорблении это оскорбление'; 
case 10: 
return 'Веревка и мыло для тебя самый лучший выход'; 
case 11: 
return 'Моя структура кода хочет плакать при твоем виде'; 
case 12: 
return 'Ты оскорбляешь местоимение "ты" своей никчемностью'; 
case 13: 
return 'Тебя даже Лавкрафт не в состоянии описать'; 
case 14: 
return 'Твои кости слабы, а может ты и безкостный'; 
case 15: 
return 'Твоя сила воли как Киш-Миш'; 
case 16: 
return 'Ты ниже чем все социальные слои'; 
case 17: 
return 'Жаль что ты до сих пор ходишь по улицам, лучше дома сидел-бы'; 
case 18: 
return 'Тебя всегда пытались похоронить заживо'; 
case 19: 
return 'Weak And Frail, Bones Break'; 
case 20: 
return 'Когда для твоего уничтожения наняли умную пыль, она убежала'; 
case 21: 
return 'В морге от твоего трупа все убежали-бы'; 
case 22: 
return 'Достаточно твоего присутсвия, чтобы у людей рушились судьбы'; 
case 23: 
return 'Если жизнь это комикс, Я бы не рекомендовала открывать тебе пэинт'; 
case 24: 
return 'Тебя даже игнорировать невозможно'; 
case 25: 
return 'У][М][Р][И'; 
} 
} 

//Команды и ответы 
robot.on('message', (message) => { 
//рандомные оскорбления 
if (message.content == "%ex") { 
message.reply(randomMessage()); 
} 

//help 
if (message.content == "%help" /*cmd === '${prefix}help'*/ ) { 
let bicon = robot.user.displayAvatarURL; 
let botembed = new Discord.RichEmbed() 
.setDescription("Информация") 
.setColor("#420303") 
.addField("Имя", robot.user.username) 
.setThumbnail(bicon) 
.addField("Разработчик", "「†EmPtY†」") 
.addField("Команды", "%ex %help %serverinfo") 
return message.channel.send(botembed); 
} 

//Информация о сервере - не работает 
if (message.content == "%serverinfo") { 

let sicon = message.guild.iconURL; 
let serverembed = new Discord.RichEmbed() 
.setDescription("Информация о сервере") 
.setColor("#15f153") 
.setThumbnail(sicon) 
.addField("Имя Сервера", message.guild.name) 
.addField("Создан", message.guild.createdAt) 
.addField("Ты присоединился", message.member.joinedAt) 
.addField("Всего участников", message.guild.memberCount); 

return message.channel.send(serverembed); 
} 
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
