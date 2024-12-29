import { useState, useEffect } from "react";
import GameList from "../src/app/components/GameList";
import AchievementList from "../src/app/components/AchievementList";

const App = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    // Fetch your games data here and set it to `games` state
  }, []);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    // Fetch achievements for the selected game
  };

  return (
    <div className="App">
      <GameList
        games={[{ name: "game 1", description: "test", id: 1 }]}
        onGameSelect={handleGameSelect}
      />
      {selectedGame && (
        <AchievementList
          achievements={[{ title: "achievement1", description: "1desc" }]}
        />
      )}
    </div>
  );
};

export default App;
