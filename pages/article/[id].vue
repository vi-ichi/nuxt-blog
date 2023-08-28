<script setup>
import { useArticles } from "~/stores/articles";

const { getArticle } = useArticles();
</script>

<template>
  <div>{{ getArticle($route.params.id).title }}</div>
  <div>{{ getArticle($route.params.id).content }}</div>
</template>
