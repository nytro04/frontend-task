<template>
	<div
		class="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
		:class="className"
	>
		<div class="fixed inset-0 transition-opacity">
			<div
				class="absolute inset-0 bg-gray-500 opacity-75"
				@click="closeModal()"
			></div>
		</div>
		<span
			class="hidden sm:inline-block sm:h-screen sm:align-middle"
			aria-hidden="true"
			>&#8203;</span
		>
		<!-- :class="className" -->
		<div
			class="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle"
			:class="[maxWidth, className]"
		>
			<div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
				<button
					type="button"
					class="focus:ring-brand-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
					@click="closeModal()"
				>
					<span class="sr-only">Close</span>
					<font-awesome-icon
						:icon="['fas', 'xmark']"
						class="font-medium text-black"
					/>
				</button>
			</div>
			<div>
				<div class="mt-1 text-center sm:mt-5">
					<h3 class="text-lg font-medium leading-6 text-gray-900">
						<slot name="title"></slot>
					</h3>
					<div class="mt-2 text-left">
						<div class="text-sm text-gray-500">
							<slot name="body"></slot>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-5 gap-x-3 sm:mt-4 sm:flex sm:flex-row-reverse">
				<slot name="button-left"></slot>
				<slot name="button-right"></slot>

				<!-- <button
          type="button"
          class="inline-flex justify-center px-4 py-2 mt-3 w-full text-base font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm sm:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:mt-0 sm:w-auto sm:text-sm sm:mr-1"
          @click="closeModal()"
        >
          Cancel
        </button> -->
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		className: String,
		maxWidth: {
			type: String,
			default: 'sm:max-w-xl',
		},
	})

	const emit = defineEmits(['toggleModal'])

	function closeModal() {
		emit('toggleModal')
	}
</script>

<style>
	.fit-height {
		height: -webkit-fill-available;
		overflow-y: scroll !important;
		margin-bottom: 0;
		margin-top: 0.5rem;
	}
</style>
