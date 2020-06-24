import axios from "axios"
import { API_KEY, BASE_URL } from "../config/api_config"

const getItems = async (sourceUrl, page) => {
  const url = BASE_URL + "/" + sourceUrl
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        page,
      },
    })
    // console.log("the data is: ", response.data)
    const items = response.data

    return items
  } catch (err) {
    throw err
  }
}

export default getItems
