import { defineStore } from 'pinia'
import { getDishes, createDishNew } from '@/services/dishes'

export const useDishStore = defineStore('dish', {
	state: () => ({
		dishes: [],
	}),
	actions: {
		async fetchDishes() {
			const dishes = await getDishes()
			this.dishes = dishes
		},
		async createNewDish(dish) {
			const response = await createDishNew(dish)
			this.dishes.push(response)
		},
	},
})
