<template>
	<tbody class="divide-y divide-gray-200 bg-white">
		<tr>
			<td
				class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500"
			>
				{{ dish.name }}
			</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
				{{ dish.description }}
			</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
				{{ dish.price }}
			</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
				{{ dish.category }}
			</td>
			<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
				{{ dish.type }}
			</td>
			<td
				class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium"
			>
				<div class="flex space-x-10">
					<button @click="toggleModal">
						<font-awesome-icon class="text-red-500" :icon="['fas', 'trash']" />
					</button>
					<!-- <button>
						<font-awesome-icon
							class="text-yellow-500"
							:icon="['fas', 'pen-to-square']"
						/>
					</button> -->
				</div>
				<!-- <a href="#" class="text-indigo-600 hover:text-indigo-900"
					>Action<span class="sr-only">, {{ dish.name }}</span></a
				> -->
			</td>
		</tr>
	</tbody>

	<WarningModal
		title="Delete Dish"
		text="Are you sure you want to delete this dish?"
		confirm-text="Delete Dish"
		:show-modal="showModal"
		:toggle="toggleModal"
		@click="deleteDish"
	/>
</template>

<script setup>
	import { useDishStore } from '@/stores/dish'
	import WarningModal from '@/components/Shared/WarningModal.vue'
	import { toRefs, ref } from 'vue'

	const props = defineProps({
		dish: {
			type: Object,
			required: true,
		},
	})

	const dishStore = useDishStore()
	const { dish } = toRefs(props)

	const showModal = ref(false)

	const toggleModal = () => {
		showModal.value = !showModal.value
	}

	const deleteDish = async () => {
		await dishStore.deleteDish(dish.value._id)
		toggleModal()
	}
</script>

<style lang="scss" scoped></style>
