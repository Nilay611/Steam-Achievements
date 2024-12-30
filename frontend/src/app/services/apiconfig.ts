import axios from "axios";

const API_BASE_URL = "https://localhost:44340";
const API_GET_GAMES = API_BASE_URL + "/games";
const API_GET_ACHEIVEMENTS = API_BASE_URL + "/achievements/";

export const getGames = async () => {
  try {
    const response = await axios.get(API_GET_GAMES);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAchievements = async (appId: number) => {
  const url = API_GET_ACHEIVEMENTS + appId.toString();
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
