<script setup>
import { useArticles } from "~/stores/articles";
import { storeToRefs } from "pinia";

const { addArticle } = useArticles();

const title = ref("");
const content = ref("");

function publish() {
  console.log(title.value);
  console.log(content.value);
}
</script>

<template>
  <h1>Новая статья</h1>
  <div>Название</div>
  <input v-model="title" />
  <div>Содержание</div>
  <textarea v-model="content"></textarea>
  <button @click="publish" :disabled="!(title && content)">Опубликовать</button>
</template>
