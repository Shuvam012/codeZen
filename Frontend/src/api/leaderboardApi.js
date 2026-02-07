import API from "./axios";

export const getMyStats = () => API.get("/leaderboard/me/stats");
export const getTopicLeaderboard = (topic) => API.get(`/leaderboard/${topic}`);