import API from "./axios";

export const getTopics = async () => {
    const res = await API.get("/quiz/topics");
    return res.data;
};