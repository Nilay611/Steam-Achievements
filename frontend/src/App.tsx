import { useState, useEffect } from "react";
import GameList from "../src/app/components/GameList";
import AchievementList from "../src/app/components/AchievementList";
import { getGames, getAchievements } from "./app/services/apiconfig";

const App = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData.response.games);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
    };
    fetchGames();
  }, []);

  const handleGameSelect = async (game) => {
    try {
      setSelectedGame(game);
      const achievementsData = await getAchievements(game.appid);
      if (
        achievementsData.game?.availableGameStats?.achievements === null ||
        achievementsData.game?.availableGameStats?.achievements === undefined
      ) {
        setAchievements([]);
        return;
      }
      setAchievements(achievementsData.game.availableGameStats.achievements);
    } catch (error) {
      console.error("Error fetching achievements: ", error);
    }
  };

  return (
    <div className="App">
      <GameList games={games} onGameSelect={handleGameSelect} />
      {selectedGame && <AchievementList achievements={achievements} />}
    </div>
  );
};

export default App;
