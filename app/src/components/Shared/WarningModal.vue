<template>
	<Modal v-if="showModal" @toggleModal="toggleModal">
		<template #title>
			<div class="-mt-2 flex gap-x-5">
				<div class="w-1/8">
					<font-awesome-icon
						class="mx-auto h-5 w-5 rounded-full bg-red-100 stroke-1 p-2 text-red-600"
						:icon="['fas', 'exclamation']"
					/>
				</div>
				<h2 class="mt-1 text-lg font-medium leading-6 text-gray-900">
					{{ title }}
				</h2>
			</div>
		</template>
		<template #body>
			<div class="-mt-2 mb-5 ml-16">
				<p class="text-gray-500">
					{{ text }}
				</p>
			</div>
		</template>
		<template #button-left>
			<button class="btn btn-minimal" @click="deleteDish">
				{{ confirmText }}
			</button>
		</template>
		<template #button-right>
			<button class="btn btn-warning" @click="toggleModal">Cancel</button>
		</template>
	</Modal>
</template>

<script setup>
	import Modal from './Modal.vue'

	const props = defineProps({
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		confirmText: {
			type: String,
			default: 'Confirm',
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

	const emits = defineEmits(['click'])

	const deleteDish = () => emits('click')
</script>
