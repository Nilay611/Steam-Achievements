const AchievementList = ({ achievements }) => {
  return (
    <div className="achievement-list grid grid-cols-1 gap-4 mt-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="achievement-item p-4 border rounded"
        >
          <h3 className="text-lg font-semibold">{achievement.title}</h3>
          <p className="text-gray-600">{achievement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AchievementList;
