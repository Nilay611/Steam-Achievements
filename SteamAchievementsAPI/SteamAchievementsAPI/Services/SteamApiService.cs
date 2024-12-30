namespace SteamAchievementsAPI.Services;
public class SteamApiService(HttpClient httpClient, IConfiguration configuration) : ISteamApiService
{
    private readonly HttpClient _httpClient = httpClient;
    private readonly string _steamApiKey = configuration.GetValue<string>("SteamApiKey");
    private readonly string _steamUserId = configuration.GetValue<string>("SteamUserId");

    public async Task<HttpResponseMessage> GetGamesAsync()
    {
        var url = $"http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key={_steamApiKey}&steamid={_steamUserId}&include_appinfo=true";
        return await _httpClient.GetAsync(url);
    }

    public async Task<HttpResponseMessage> GetAchievementsByGame(int appId)
    {
        var url = $"http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?appid={appId}&key={_steamApiKey}&l=english";
        return await _httpClient.GetAsync(url);
    }

    public async Task<HttpResponseMessage> GetPlayerAchievementStatus(int appId)
    {
        var url = $"http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid={appId}&key={_steamApiKey}&steamid={_steamUserId}";
        return await _httpClient.GetAsync(url);
    }
}
