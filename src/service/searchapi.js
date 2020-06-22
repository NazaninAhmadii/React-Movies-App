import axios from "axios"
import { API_KEY, BASE_URL } from "../config/api_config"

const searchItems = async (searchUrl, query) => {
  const url = BASE_URL + "/" + searchUrl
  console.log(url)
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        query,
      },
    })

    const items = response.data.results

    return items
  } catch (err) {
    throw err
  }
}

export default searchItems
