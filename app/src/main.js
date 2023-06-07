import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faTrash,
	faPenToSquare,
	faExclamation,
	faXmark,
	faBowlFood,
} from '@fortawesome/free-solid-svg-icons'

import router from '@/router'

library.add(faTrash)
library.add(faPenToSquare)
library.add(faExclamation)
library.add(faXmark)
library.add(faBowlFood)

import '@/assets/index.css'

const pinia = createPinia()

createApp(App)
	.use(pinia)
	.use(router)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')
