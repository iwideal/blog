<template>
    <div class="bg-white">
        <div class="mx-auto w-full px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
                    <div class="relative w-full" @click="$router.push(post.href)">
                        <img :src="post.imageUrl" alt=""
                            class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div class="max-w-xl">
                        <div class="mt-8 flex items-center gap-x-4 text-xs">
                            <time class="text-gray-500">{{ post.date }}</time>
                            <a
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                    post.tags[0] }}</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a @click="$router.push(post.href)" :as="button">
                                    <span class="absolute inset-0" />
                                    {{ post.title }}
                                </a>
                            </h3>
                        </div>
                    </div>
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