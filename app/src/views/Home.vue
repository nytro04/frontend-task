<template>
	<div class="main-container">
		<div class="flex justify-end">
			<button @click="toggleModal" class="btn btn-primary">create dish</button>
		</div>
		<CreateDish
			title="Create a dish"
			:show-modal="showModal"
			@toggleModal="toggleModal"
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import CreateDish from '@/components/Dishes/CreateDish.vue'

	const showModal = ref(false)
	const toggleModal = () => (showModal.value = !showModal.value)
</script>

<style lang="scss" scoped></style>
