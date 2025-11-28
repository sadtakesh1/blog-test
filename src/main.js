import "./styles/base.css";
import { renderPostList } from "./components/post-list/post-list";
import {
  setupPostForm,
  startCreatePost,
} from "./components/post-form/post-form";
import { showScreen } from "./components/layout/layout";

const addPostButton = document.querySelector("#btn-new-post");
const editBackButton = document.querySelector("#btn-back-edit");
const viewBackButton = document.querySelector("#btn-back-view");

//инициализация формы(создание/редактирование)
setupPostForm();

//рендер стартового списка
renderPostList();

//по умолчанию открываем список постов
showScreen("list");

//кнопка нового поста
if (addPostButton) {
  addPostButton.addEventListener("click", () => {
    startCreatePost();
  });
}

//кнопки назад
if (editBackButton) {
  editBackButton.addEventListener("click", () => showScreen("list"));
}
if (viewBackButton) {
  viewBackButton.addEventListener("click", () => showScreen("list"));
}
