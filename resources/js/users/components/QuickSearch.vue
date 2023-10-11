<template>
    <div class="flex my-2">
        <input v-model="query" @keyup.enter="search()" type="text" placeholder="Search"
            class="py-2 px-2 text-md border border-gray-200 rounded-l focus:outline-none" />
        <button type="button" @click="search()"
            class="w-10 flex items-center justify-center border-t border-r border-b border-gray-200 rounded-r text-gray-100 bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore.js'

const query = ref('')
const userStore = useUserStore()

const search = () => {
    userStore.filter(query.value)
}
</script>