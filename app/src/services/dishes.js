import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_API_URL
const url = `${baseUrl}/dishes`

export const getDishes = async () => {
	const response = await axios.get(url)
	return response.data
}

export const createDishNew = async (dish) => {
	const response = await axios.put(url, dish)
	return response.data
}

export const deleteDish = async (id) => {
	const response = await axios.delete(`${url}/${id}`)
	return response.data
}
