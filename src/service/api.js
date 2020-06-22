import axios from "axios"
import { API_KEY, BASE_URL } from "../config/api_config"

const getItems = async (sourceUrl) => {
  const url = BASE_URL + "/" + sourceUrl
  console.log(url)
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
      },
    })

    const items = response.data.results

    return items
  } catch (err) {
    throw err
  }
}

export default getItems
