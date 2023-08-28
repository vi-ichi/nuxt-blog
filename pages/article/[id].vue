<script setup>
import { useArticles } from "~/stores/articles";

const { getArticle } = useArticles();
</script>

<template>
  <div class="mb-8">
    <div class="text-2xl">{{ getArticle($route.params.id).title }}</div>
    <NuxtLink class="text-blue-500 hover:underline" to="/">Назад к статьям</NuxtLink>
  </div>
  <div class="">{{ getArticle($route.params.id).content }}</div>
</template>
