<script setup>
import { useArticles } from "~/stores/articles";
import { storeToRefs } from "pinia";

const { articles } = storeToRefs(useArticles());
</script>

<template>
  <h1>Список статей</h1>
  <NuxtLink to="new">Новая статья</NuxtLink>
  <div v-for="a in articles">
    <NuxtLink :to="'article/' + a.id">{{ a.title }}</NuxtLink>
  </div>
</template>
