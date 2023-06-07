<template>
	<div>
		<MainNav />
		<div class="main-container">
			<div class="mb-20 flex justify-end">
				<button @click="toggleModal" class="btn btn-primary">
					create dish
				</button>
			</div>

			<DishList />

			<CreateDish
				title="Create a dish"
				:show-modal="showModal"
				@toggleModal="toggleModal"
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import CreateDish from '@/components/Dishes/CreateDish.vue'
	import DishList from '@/components/Dishes/DishList.vue'
	import MainNav from '@/components/Layouts/MainNav.vue'

	const showModal = ref(false)
	const toggleModal = () => (showModal.value = !showModal.value)
</script>

<style lang="scss" scoped></style>
