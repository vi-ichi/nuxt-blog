import { defineStore } from "pinia";

export const useArticles = defineStore("articles", () => {
  const articles = ref([
    {
      id: 1,
      title: "Первая статья",
      content: "Контент статьи",
    },
    {
      id: 2,
      title: "Вторая статья",
      content: "Контент статьи",
    },
    {
      id: 3,
      title: "Третья статья",
      content: "Контент статьи",
    },
  ]);

  function addArticle(a) {
    articles.value.push(a);
  }

  function getArticle(id) {
    return articles.value.find((a) => a.id === Number(id));
  }

  return { addArticle, getArticle, articles };
});
