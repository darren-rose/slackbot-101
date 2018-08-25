var SlackBot = require('slackbots');

var cpuStats = require('cpu-stats');

var bot = new SlackBot({
    token: 'token-value',
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
    return;
  }

  if(data.text.includes(" stats")){
    var params = {
        icon_emoji: ':cat:'
    };

    cpuStats(1000, function(error, result) {
      if (error) {
        console.error('error', error);
        bot.postMessageToChannel('general', error, params);
        return;
      } 
 
      bot.postMessageToChannel('general', result, params);
    });

    return;
  }

});



