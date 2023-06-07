<template>
	<div class="">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="border-b border-gray-200 shadow sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200 px-10">
						<thead class="bg-gray-50 px-10">
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
								>
									Name
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Description
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Price
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Category
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Category
								</th>
								<th scope="col" class="relative py-3.5 pl-3 pr-4">
									<span class="sr-only">Action</span>
								</th>
							</tr>
						</thead>
						<DishListItem v-for="dish in dishes" :key="dish._id" :dish="dish" />
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import DishListItem from './DishListItem.vue'
	import { useDishStore } from '@/stores/dish'
	import { storeToRefs } from 'pinia'

	const dishStore = useDishStore()
	const { dishes } = storeToRefs(dishStore)

	dishStore.fetchDishes()
</script>

<style lang="scss" scoped></style>
