import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_API_URL
const url = `${baseUrl}/dishes`

export const getDishes = async () => {
	const response = await axios.get(url)
	return response.data
}
