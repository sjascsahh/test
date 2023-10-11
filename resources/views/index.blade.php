<x-app-layout>
    <x-slot name="header">
        <h1 class="text-2xl">Cadence Labs</h1>
    </x-slot>

    @vite('resources/js/users/index.js')

    <div id="app">    
        <quick-search></quick-search>
        <div class="flex flex-col mb-4">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <users-table></users-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
