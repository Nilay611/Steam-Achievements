const AchievementList = ({ achievements }) => {
  return (
    <div className="achievement-list grid grid-cols-1 gap-4 mt-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.name}
          className="achievement-item p-4 border rounded"
        >
          <h3 className="text-lg font-semibold">{achievement.displayName}</h3>
          <p className="text-gray-600">{achievement.description}</p>
          <img src={achievement.icon} alt={achievement.name} />
        </div>
      ))}
    </div>
  );
};

export default AchievementList;
