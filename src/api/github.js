import axios from "axios";

export const getGithubData = (url) => {
   return axios.get(`https://api.github.com/repos/${url}`)
}