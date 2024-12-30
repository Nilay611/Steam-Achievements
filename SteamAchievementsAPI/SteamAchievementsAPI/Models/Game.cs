namespace SteamAchievementsAPI.Models;

public class Game
{
    public required int appid { get; set; }
    public required string name { get; set; }
    public int? playtime_forever { get; set; }
    public string? img_icon_url { get; set; }
    public bool? has_community_visible_stats { get; set; }
    public int? playtime_windows_forever { get; set; }
    public int? rtime_last_played { get; set; }
}

public class GameResponse
{
    public List<Game>? GamesList { get; set; }
}
