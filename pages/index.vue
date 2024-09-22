<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
                    <NuxtLink :to="post.href">
                        <div class="relative w-full">
                            <img :src="post.imageUrl" alt=""
                                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                    </NuxtLink>
                    <div class="max-w-xl">
                        <div class="mt-8 flex items-center gap-x-4 text-xs">
                            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                            <a
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                    post.category.title }}</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <NuxtLink :to="post.href">
                                    <a><span class="absolute inset-0" />{{ post.title }}</a>
                                </NuxtLink>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
                            <div class="text-sm leading-6">
                                <p class="font-semibold text-gray-900">
                                    <a><span class="absolute inset-0" />{{ post.author.name }}</a>
                                </p>
                                <p class="text-gray-600">{{ post.author.role }}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    <HeroFooters></HeroFooters>
</template>

<script setup>
const posts = [
    {
        id: 1,
        title: '利润分析大师--拼多多使用教程',
        href: '/pinduoduo',
        description:'这篇文章主要讲述拼多多卖家如何计算利润的过程，以及如何提高利润。通过这篇文章，您将会发现拼多多的销售额的巨大含水量。',
        imageUrl:'https://picgo.dalualex.cn/20240822134407.png',
        date: '2024年8月',
        datetime: '2020-03-16',
        category: { title: '教程' },
        author: {
            name: '大路alex',
            role: '利润分析大师开发者',
            imageUrl:'https://picgo.dalualex.cn/touxiang.jpg',
        },
    },
    {
        id: 1,
        title: '利润分析大师--淘宝使用教程',
        href: '/taobao',
        description:'这篇文章主要讲述淘宝卖家如何计算利润的过程，讲解非常详细，堪称保姆级别，建议收藏！过程包含了如何导出数据、如何计算利润等内容。',
        imageUrl:'https://picgo.dalualex.cn/20240915193856.png',
        date: '2024年8月',
        datetime: '2020-03-16',
        category: { title: '教程' },
        author: {
            name: '大路alex',
            role: '利润分析大师开发者',
            imageUrl:'https://picgo.dalualex.cn/touxiang.jpg',
        },
    },
    {
        id: 1,
        title: '如何查看拼多多仅退款数额？退货运费补贴金额？',
        href: '/duizhang',
        description:'拼多多仅退款和售后运费补贴金额都被隐藏起来了，需要我们自己去手动操作查询，今天就给大家分享一下怎么查看这两项数据的方法。',
        imageUrl:'https://picgo.dalualex.cn/20240919100446.png',
        date: '2024年8月',
        datetime: '2020-03-16',
        category: { title: '教程' },
        author: {
            name: '大路alex',
            role: '利润分析大师开发者',
            imageUrl:'https://picgo.dalualex.cn/touxiang.jpg',
        },
    },
    // More posts...
]
</script>