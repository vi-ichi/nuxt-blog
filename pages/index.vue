<script setup>
import { useArticles } from "~/stores/articles";
import { storeToRefs } from "pinia";

const { articles } = storeToRefs(useArticles());
</script>

<template>
  <div class="mb-8">
    <h1 class="text-2xl">Блог об актуальном</h1>
    <NuxtLink class="text-blue-500 hover:underline" to="new">Новая статья</NuxtLink>
  </div>
  <div class="mb-4" v-for="a in articles">
    <NuxtLink class="text-xl" :to="'article/' + a.id">{{ a.title }}</NuxtLink>
    <div class="text-gray-500">{{ a.content }}</div>
  </div>
</template>
