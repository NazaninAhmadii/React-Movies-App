import axios from "axios"
import { APP_KEY, BASE_URL } from "../config/api_config"

export const getItems = async (itemName) => {
  const url = BASE_URL

  try {
    const response = await axios.get(url, {
      params: {
        app_key: APP_KEY,
      },
    })
    console.log(response)

    const items = response.data
    return items
  } catch (err) {
    throw err
  }
}

export default getItems
