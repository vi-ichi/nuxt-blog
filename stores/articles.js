import { defineStore } from "pinia";

export const useArticles = defineStore("articles", () => {
  const articles = ref([
    {
      id: 1,
      title: "Как посадить морковь в огороде",
      content: "Нужно только сделать...",
    },
    {
      id: 2,
      title: "Как собрать урожай моркови",
      content: "Что посеешь, то пожнешь",
    },
    {
      id: 3,
      title: "Как продать морковь на маркетплейсе",
      content: "Зарегистрируйся на онлайн курс на Skillbox",
    },
  ]);

  function addArticle({ title, content }) {
    articles.value.push({ title, content, id: articles.value.at(-1).id + 1 });
  }

  function getArticle(id) {
    return articles.value.find((a) => a.id === Number(id));
  }

  return { addArticle, getArticle, articles };
});
