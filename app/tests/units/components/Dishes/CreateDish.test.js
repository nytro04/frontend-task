import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import CreateDish from '@/components/Dishes/CreateDish.vue'
import { createTestingPinia } from '@pinia/testing'
import { useDishStore } from '@/stores/dish'

describe('CreateDish', () => {
	it('create a dish', async () => {
		const pinia = createTestingPinia()

		render(CreateDish, {
			global: {
				plugins: [pinia],
			},
			props: {
				title: 'create dish',
				showModal: true,
				toggleModal: vi.fn(),
			},
		})

		const nameInput = screen.getByLabelText(/name/i)
		const descriptionInput = screen.getByLabelText(/description/i)
		const priceInput = screen.getByLabelText(/price/i)
		const durationInput = screen.getByLabelText(/duration/i)
		const categorySelect = screen.getByLabelText(/category/i)
		const typeSelect = screen.getByLabelText(/type/i)
		const submitButton = screen.getByRole('button', { name: /create dish/i })

		await userEvent.type(nameInput, 'rice')
		await userEvent.type(descriptionInput, 'most popular dish')
		await userEvent.type(priceInput, '10')
		await userEvent.type(durationInput, '10')
		await userEvent.selectOptions(categorySelect, 'dinner')
		await userEvent.selectOptions(typeSelect, 'main')

		const dishStore = useDishStore()
		dishStore.dishes = []

		await userEvent.click(submitButton)

		expect(dishStore.dishes).toHaveLength(1)
	})
})
