import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import { useDishStore } from '@/stores/dish'
import DishList from '@/components/Dishes/DishList.vue'

describe('DishList', () => {
	const renderDishListings = () => {
		const pinia = createTestingPinia()
		render(DishList, {
			plugins: [pinia],
			global: {
				stubs: {
					FontAwesomeIcon: true,
				},
			},
		})
	}
	it('fetches dishes from the server', () => {
		renderDishListings()

		const dishStore = useDishStore()
		expect(dishStore.fetchDishes).toHaveBeenCalled()
	})
	it('renders a list of dishes', () => {
		renderDishListings()

		const dishStore = useDishStore()
		dishStore.dishes = [
			{
				_id: '1',
				name: 'rice',
				description: 'most popular dish',
				price: 10,
				duration: 10,
				category: 'dinner',
				type: 'main',
			},
		]

		const rows = screen.getAllByRole('row')

		expect(rows).toHaveLength(1)
	})
})
