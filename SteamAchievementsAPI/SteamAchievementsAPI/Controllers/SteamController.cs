using Microsoft.AspNetCore.Mvc;
using SteamAchievementsAPI.Services;

namespace SteamAchievementsAPI.Controllers;

public class SteamController(ISteamApiService steamApiService) : Controller
{
    private readonly ISteamApiService _steamApiService = steamApiService;

    [HttpGet("games")]
    public async Task<IActionResult> GetGamesList()
    {
        var response = await _steamApiService.GetGamesAsync();

        if (!response.IsSuccessStatusCode) 
        { 
            return StatusCode((int) response.StatusCode); 
        }

        var jsonResponse = await response.Content.ReadAsStringAsync(); 
        return new ContentResult 
        { 
            Content = jsonResponse, 
            ContentType = "application/json", 
            StatusCode = (int) response.StatusCode 
        };
    }

    [HttpGet("achievements/{appId}")]
    public async Task<IActionResult> GetAchievementsByGame(int appId)
    {
        var response = await _steamApiService.GetAchievementsByGame(appId);

        if (!response.IsSuccessStatusCode)
        {
            return StatusCode((int) response.StatusCode);
        }

        var jsonResponse = await response.Content.ReadAsStringAsync();
        return new ContentResult
        {
            Content = jsonResponse,
            ContentType = "application/json",
            StatusCode = (int) response.StatusCode
        };
    }

    [HttpGet("achievement-status/{appId}")]
    public async Task<IActionResult> GetPlayerAchievementStatus(int appId)
    {
        var response = await _steamApiService.GetPlayerAchievementStatus(appId);

        if (!response.IsSuccessStatusCode)
        {
            return StatusCode((int) response.StatusCode);
        }

        var jsonResponse = await response.Content.ReadAsStringAsync();
        return new ContentResult
        {
            Content = jsonResponse,
            ContentType = "application/json",
            StatusCode = (int) response.StatusCode
        };
    }
}
