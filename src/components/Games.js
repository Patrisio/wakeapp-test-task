import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Cards, Table, Roulette, Slots, Play, Star, Crown } from '../resources/icons';
import Tab from './Tab';
import { fetchGames } from '../api';

const TABS = [
  {
    icon: <Cards />,
    label: 'Card Games'
  },
  {
    icon: <Table />,
    label: 'Table Games'
  },
  {
    icon: <Roulette />,
    label: 'Roulette'
  },
  {
    icon: <Slots />,
    label: 'Slots Games'
  },
  {
    icon: <Play />,
    label: 'Live Casino'
  },
  {
    icon: <Crown />,
    label: 'Top Games'
  },
  {
    icon: <Star />,
    label: 'All Games'
  }
];

export default function Games() {
  const [games, setGames] = useState([]);

  const getGamesList = useCallback(async categorie => {
    const games = await fetchGames(categorie);
    const gamesImages = getGamesImages(games);
    setGames(gamesImages);
  }, [])

  const getGamesImages = games => {
    const gamesImages = [];

    for (let i = 0; i < games.length; i++) {
      const formattedImageName = games[i].application_name.split(' ').join('');
      gamesImages.push(`https://aws-origin.image-tech-storage.com/gameRes/sq/200/${formattedImageName}.jpg`);
    }

    return gamesImages;
  };

  const changeCategorie = value => {
    setGames([]);
    getGamesList(value);
  }

  const renderTabs = useMemo(() => 
    TABS.map(({ icon, label }, idx) => {
      return (
        <Tab
          key={idx}
          id={idx}
          icon={icon}
          label={label}
          onClick={changeCategorie}
        />
      );
    }), [])

  const hasGames = games => games.length !== 0;

  useEffect(() => {
    const getGames = async () => {
      getGamesList('All Games');
    };
    
    getGames();
  }, [getGamesList])

  
  return (
    <>
      <TabsWrapper>
        {renderTabs}
      </TabsWrapper>

      {
        hasGames(games) ?
        <GameCardsWrapper>
          {
            games.map((gameImage, idx) => (
              <GameCard key={idx}>
                <img src={gameImage} alt='Casinoroom Game' />
              </GameCard>
            ))
          }
        </GameCardsWrapper> :
        <Loading>Loading...</Loading>
      }
    </>
  )
}

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 23px 16px 30px;
  max-width: 1215px;
  margin: 0 auto;
`;

const GameCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1215px;
  margin: 0 auto;
`;

const GameCard = styled.div`
  width: 194px;
  height: 195px;
  margin: 0 10px 10px 0;
  overflow: hidden;
  object-fit: contain;

  &:nth-child(6n) {
    margin-right: 0;
  }
`;

const Loading = styled.p`
  color: #fff;
  font-size: 40px;
  text-align: center;
`;