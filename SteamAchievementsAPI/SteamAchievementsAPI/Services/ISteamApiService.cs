namespace SteamAchievementsAPI.Services;

public interface ISteamApiService
{
    Task<HttpResponseMessage> GetGamesAsync();
    Task<HttpResponseMessage> GetAchievementsByGame(int appId);
    Task<HttpResponseMessage> GetPlayerAchievementStatus(int appId);
}
