<template>
	<Modal v-if="showModal" @toggleModal="toggleModal">
		<template #title>
			<h2 class="mb-4 mt-1 text-2xl font-medium leading-6 text-gray-900">
				{{ title }}
			</h2>
		</template>
		<template #body>
			<div>
				<Form
					id="create-dish"
					v-slot="{ values, validate }"
					class="space-y-5"
					:validation-schema="schema"
					@submit="onSubmit"
				>
					<div class="mb-10 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
						<div class="mt-4 sm:col-span-4">
							<label for="name" class="block text-sm font-medium text-gray-700"
								>Name</label
							>
							<div class="mt-1">
								<Field
									type="text"
									name="name"
									class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
								<ErrorMessage name="name" class="mt-2 text-sm text-red-600" />
							</div>
						</div>
						<div class="mt-4 sm:col-span-4">
							<label
								for="description"
								class="block text-sm font-medium text-gray-700"
							>
								Description
							</label>
							<div class="mt-1">
								<Field
									id="description"
									placeholder="description"
									as="textarea"
									name="description"
									:rows="3"
									class="focus:ring-brand-500 focus:border-brand-500 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
								/>
							</div>
						</div>
						<div class="mt-4 sm:col-span-3">
							<label for="price" class="block text-sm font-medium text-gray-700"
								>Price</label
							>
							<div class="mt-1">
								<Field
									type="text"
									name="price"
									class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
								<ErrorMessage name="price" class="mt-2 text-sm text-red-600" />
							</div>
						</div>
						<div class="mt-4 sm:col-span-3">
							<label for="name" class="block text-sm font-medium text-gray-700"
								>Category</label
							>
							<div class="mt-1">
								<Field
									v-slot="{ value }"
									name="category"
									as="select"
									class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								>
									<option value="" disabled>Select category</option>
									<option
										v-for="category in categories"
										:key="category"
										:value="category"
										:category="value && value.includes(category)"
									>
										{{ category }}
									</option>
								</Field>

								<ErrorMessage name="name" class="mt-2 text-sm text-red-600" />
							</div>
						</div>
						<div class="mt-4 sm:col-span-3">
							<label
								for="duration"
								class="block text-sm font-medium text-gray-700"
								>Duration</label
							>
							<div class="mt-1">
								<Field
									type="text"
									name="duration"
									class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
								<ErrorMessage
									name="duration"
									class="mt-2 text-sm text-red-600"
								/>
							</div>
						</div>
						<div class="mt-4 sm:col-span-3">
							<label for="type" class="block text-sm font-medium text-gray-700"
								>Type of Dish</label
							>
							<div class="mt-1">
								<Field
									v-slot="{ value }"
									name="type"
									as="select"
									class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								>
									<option value="" disabled>Select Type</option>
									<option
										v-for="type in typeOfDish"
										:key="type"
										:value="type"
										:type="value && value.includes(type)"
									>
										{{ type }}
									</option>
								</Field>

								<ErrorMessage name="name" class="mt-2 text-sm text-red-600" />
							</div>
						</div>
					</div>
					<div class="flex justify-end space-x-5">
						<button class="btn btn-primary">Create dish</button>
						<!-- <button class="btn btn-secondary" @click="toggleModal">
							Cancel
						</button> -->
					</div>
				</Form>
			</div>
		</template>
	</Modal>
</template>

<script setup>
	import Modal from '@/components/Shared/Modal.vue'
	import { ErrorMessage, Field, Form } from 'vee-validate'

	import { createDishSchema } from '@/entities/forms/validationSchema'

	const schema = createDishSchema

	const props = defineProps({
		title: {
			type: String,
			default: '',
		},
		showModal: {
			type: Boolean,
			default: false,
		},
		toggleModal: {
			type: Function,
			default: () => ({}),
		},
	})

	const categories = ['Breakfast', 'Lunch', 'Dinner', 'Weekday/-ends']
	const typeOfDish = ['Starter', 'Main', 'Dessert']

	function onSubmit(values) {
		// Submit values to API...
		console.log(values)
	}

</script>

<style lang="scss" scoped></style>
