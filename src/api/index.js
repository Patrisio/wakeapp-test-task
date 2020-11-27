let cachedGames = {};

export const fetchGames = async categorie => {
  if (!cachedGames[categorie]) {
    let games;
    const getParams = {
      liveCasinoOnly: true
    };
  
    if (categorie === 'Top Games') {
      Object.assign(getParams, {
        is_most_popular: true,
        limit: 25
      });
  
      games = fetch(`https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io?${new URLSearchParams(getParams)}`);
    } else if (categorie === 'All Games' || categorie === 'Slots Games') {
      Object.assign(getParams, { limit: 25 });
      games = fetch(`https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io?categories=Slot&${new URLSearchParams(getParams)}`);
    } else {
      Object.assign(getParams, { limit: 25 });
      games = fetch(`https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io?categories=${categorie}&${new URLSearchParams(getParams)}`);
    }

    cachedGames[categorie] = (await games).json();
  
    return cachedGames[categorie];
  }
  
  return cachedGames[categorie];
};