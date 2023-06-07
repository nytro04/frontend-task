import { defineStore } from 'pinia'
import { getDishes, createDishNew, deleteDish } from '@/services/dishes'

export const useDishStore = defineStore('dish', {
	state: () => ({
		dishes: [],
		loading: false,
	}),
	actions: {
		async fetchDishes() {
			this.loading = true
			try {
				const response = await getDishes()
				this.dishes = response.data
			} catch (error) {
				//TODO: Add error handling with a toast here
				console.log(error)
			} finally {
				this.loading = false
			}
		},
		async createNewDish(dish) {
			this.loading = true
			try {
				const response = await createDishNew(dish)
				this.dishes.push(response.data)
			} catch (error) {
				//TODO: Add error handling with a toast here
				console.log(error)
			} finally {
				this.loading = false
			}
		},
		async deleteDish(id) {
			this.loading = true
			try {
				await deleteDish(id)
				this.dishes = this.dishes.filter((dish) => dish._id !== id)
			} catch (error) {
				//TODO: Add error handling with a toast here
				console.log(error)
			} finally {
				this.loading = false
			}
		},
	},
})
