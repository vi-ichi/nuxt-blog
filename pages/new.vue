<script setup>
import { useArticles } from "~/stores/articles";
import { storeToRefs } from "pinia";

const { addArticle } = useArticles();

const title = ref("");
const content = ref("");

const router = useRouter();

function publish() {
  addArticle({ title: title.value, content: content.value });
  router.push("/");
}
</script>

<template>
  <h1 class="text-2xl mb-8">Новая статья</h1>
  <div class="mb-2 text-gray-500">Название</div>
  <input class="bg-gray-800 rounded-md mb-4 w-full px-3 py-2" v-model="title" />
  <div class="mb-2 text-gray-500">Статья</div>
  <textarea
    rows="10"
    class="bg-gray-800 rounded-md w-full px-3 py-2"
    v-model="content"
  ></textarea>
  <button
    :class="{
      'bg-blue-500': title && content,
      'bg-gray-600 text-gray-400': !(title && content),
    }"
    class="w-full mt-4 rounded-md py-3"
    @click="publish"
    :disabled="!(title && content)"
  >
    Опубликовать
  </button>
  <NuxtLink
    class="py-3 mt-2 text-center block text-red-500 hover:underline"
    to="/"
    >Отмена</NuxtLink
  >
</template>
