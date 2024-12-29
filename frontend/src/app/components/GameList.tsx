const GameList = ({ games, onGameSelect }) => {
  return (
    <div className="game-list grid grid-cols-1 gap-4">
      {games.map((game) => (
        <div key={game.id}>
          <button
            className="game-item p-4 border rounded cursor-pointer
            hover:bg-gray-200"
            onClick={() => onGameSelect(game)}
          >
            click me
          </button>
          <h2 className="text-xl font-semibold">{game.name}</h2>
          <p className="text-gray-600">{game.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
