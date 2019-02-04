const Discord = require("discord.js");
const { TOKEN, TOKEN2, TOKEN3 } = require('./config');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-credit'){
        message.channel.send('#credits @M.A#0003 4000')
    }
});

client.on('message', message => {
    if(message.content === '-rep'){
        message.channel.send('#rep @M.A#0003')
    }
});

client2.on('message', message => {
    if(message.content === ''){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-credit'){
        message.channel.send('#credits @M.A#0003 4000')
    }
});

client2.on('message', message => {
    if(message.content === '-rep'){
        message.channel.send('#rep @M.A#0003')
    }
});

client3.on('message', message => {
    if(message.content === '-daily'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === '-credit'){
        message.channel.send('#credits @M.A#0003 4000')
    }
});

client3.on('message', message => {
    if(message.content === '-rep'){
        message.channel.send('#rep @M.A#0003')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A M.A`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
