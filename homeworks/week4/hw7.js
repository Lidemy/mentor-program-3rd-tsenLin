const request = require('request');
const process = require('process');

let count = 0;
const max = 30;

function getGame(name, callback) {
  request(
    {
      url: `https://api.twitch.tv/helix/games?name=${name}`,
      headers: {
        'Client-ID': 'g79xv1ajh7dualmssudzls1n4gh5le',
      },
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const result = JSON.parse(body);
        const game = result.data;

        if (callback !== null) {
          callback(game[0]);
        }
      }
    },
  );
}

function getTopStrams(game, curosr = '') {
  request(
    {
      url: `https://api.twitch.tv/helix/streams?game_id=${game.id}&first=10&after=${curosr}`,
      headers: {
        'Client-ID': 'g79xv1ajh7dualmssudzls1n4gh5le',
      },
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const result = JSON.parse(body);
        const streams = result.data;
        for (let i = 0; i < streams.length; i += 1) {
          console.log(`${streams[i].id} ${streams[i].title}`);
        }

        count += streams.length;

        if (count < max) {
          getTopStrams(game, result.pagination.cursor);
        }
      }
    },
  );
}


getGame(process.argv[2], getTopStrams);
