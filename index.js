var SlackBot = require('slackbots');

var bot = new SlackBot({
    token: 'the token'
    name: 'NodeBot'
});

bot.on('start', function() {
    var params = {
        icon_emoji: ':cat:'
    };
    
    bot.postMessageToChannel('general', 'NodeBot is online', params);
    
});

bot.on('message', function(data) {
  if(data.type !== "message") return;

  console.log(data);

  if(data.text.includes(" help")){
    var params = {
        icon_emoji: ':cat:'
    };

    bot.postMessageToChannel('general', 'The following keywords are supported:\n\nhelp\nstats', params);
  }

});
