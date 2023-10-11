<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div class="flex space-x-4 items-center">
                        <a href="#">
                            <span>Name</span>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div class="flex space-x-4 items-center">
                        <a href="#">
                            <span>Email</span>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div class="flex space-x-4 items-center">
                        <a href="#">
                            <span>Company</span>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div class="flex space-x-4 items-center">
                        <a href="#">
                            <span>Website</span>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div class="flex space-x-4 items-center">
                        <a href="#">
                            <span>Albums</span>
                        </a>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in userStore.filteredUsers">
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ user.company.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900"><a :href="'https://www.' + user.website" target="_blank">{{
                        user.website
                    }}</a></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{
                        user.albums
                    }}</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { useUserStore } from '../stores/userStore.js'

const userStore = useUserStore()

userStore.fetch()
</script>