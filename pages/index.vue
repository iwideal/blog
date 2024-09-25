<template>
    <div class="bg-white">
        <div class="mx-auto w-full px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                <article v-for="post in posts" :key="post.id"
                    class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                    <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                    <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                        <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
                        <div class="-ml-4 flex items-center gap-x-4">
                            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                        </div>
                    </div>
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                        <a :href="post.href">
                            <span class="absolute inset-0" />
                            {{ post.title }}
                        </a>
                    </h3>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
// 使用 import.meta.glob 递归导入所有 JSON 文件  https://vitejs.dev/guide/features.html#glob-import
const postsModule = import.meta.glob('@/content/blog/**/*.json');
let posts = await Promise.all(
    Object.entries(postsModule).map(async ([path, module]) => {
        const data = await module();
        return data.default
    })
);
posts = posts.flat(); // 使用 flat() 将所有数组展平  
console.log(posts);
</script>