<template>
    <div class="bg-white max-w-7xl mx-auto">
        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li v-for="file in files" :key="file.source" class="relative">
                <div
                    class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img :src="file.source" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
                    <button type="button" class="absolute inset-0 focus:outline-none">
                        <span class="sr-only">View details for {{ file.title }}</span>
                    </button>
                </div>
                <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ file.title }}
                </p>
                <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ file.size }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const files = [
    {
        title: 'Cloudflare系列',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://picsum.photos/id/684/600/400',
    },
]
</script>