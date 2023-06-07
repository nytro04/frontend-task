import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import DishListItem from '@/components/Dishes/DishListItem.vue'

describe('DishListItem', () => {
	// const createDishProps = (dishProps = {}) => ({
	// 	dish: {
	// 		_id: '1',
	// 		name: 'rice',
	// 		description: 'most popular dish',
	// 		price: 10,
	// 		duration: 10,
	// 		category: 'dinner',
	// 		type: 'main',
	// 		...dishProps,
	// 	},
	// })

	const renderDishListItem = () => {
		const pinia = createTestingPinia()
		render(DishListItem, {
			plugins: [pinia],
			global: {
				stubs: {
					FontAwesomeIcon: true,
				},
			},
			props: {
				dish: {
					_id: '1',
					name: 'rice',
					description: 'most popular dish',
					price: 10,
					duration: 10,
					category: 'dinner',
					type: 'main',
				},
			},
		})
	}

	it('renders a dish', () => {
		renderDishListItem()

		const name = screen.getByText(/rice/i)
		const description = screen.getByText(/most popular dish/i)
		const price = screen.getByText(/10/i)
		const duration = screen.getByText(/10/i)
		const category = screen.getByText(/dinner/i)
		const type = screen.getByText(/main/i)

		expect(name).toBeInTheDocument()
		expect(description).toBeInTheDocument()
		expect(price).toBeInTheDocument()
		expect(duration).toBeInTheDocument()
		expect(category).toBeInTheDocument()
		expect(type).toBeInTheDocument()
	})
})
