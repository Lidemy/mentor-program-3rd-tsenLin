const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': 'g79xv1ajh7dualmssudzls1n4gh5le',
    },
  },
  (error, response, body) => {
    if (response.statusCode === 200) {
      const result = JSON.parse(body);
      const topGames = result.data;
      for (let i = 0; i < topGames.length; i += 1) {
        console.log(`${topGames[i].id} ${topGames[i].name}`);
      }
    }
  },
);
