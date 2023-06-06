<template>
	<RouterView />
</template>

<script setup>
	import { getDishes } from '@/services/dishes'
	const fetchDishes = async () => {
		const dishes = await getDishes()
		console.log(dishes)
	}
	fetchDishes()
</script>

<style lang="scss" scoped></style>
