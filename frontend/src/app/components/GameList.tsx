const GameList = ({ games, onGameSelect }) => {
  return (
    <div className="game-list grid grid-cols-1 gap-4">
      {games.map((game) => (
        <div key={game.appid}>
          <button
            className="game-item p-4 border rounded cursor-pointer
            hover:bg-gray-200"
            onClick={() => onGameSelect(game)}
          >
            {game.name}
          </button>
          <h2 className="text-xl font-semibold">{game.name}</h2>
          <p className="text-gray-600">{game.img_icon_url}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
