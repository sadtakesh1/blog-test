import "./post-view.css";
import { getPostById, deletePost } from "../../data/posts";
import { showScreen } from "../layout/layout";
import { startEditPost } from "../post-form/post-form";
import { renderPostList } from "../post-list/post-list";

let currentPostId = null;

//открыть просмотр поста
export function openPostView(id) {
  const post = getPostById(id);
  if (!post) return;

  currentPostId = id;

  const viewTitle = document.querySelector("#view-title");
  const viewCreateEl = document.querySelector("#view-created");
  const viewUpdatedEl = document.querySelector("#view-updated");
  const viewContent = document.querySelector("#view-content");

  if (!viewTitle || !viewCreateEl || !viewUpdatedEl || !viewContent) return;

  viewTitle.textContent = post.title;
  viewCreateEl.textContent = "Дата создания: " + format(post.createdAt);
  viewUpdatedEl.textContent = "Дата редактирования: " + format(post.updatedAt);

  //разбиваем текст на абзацы
  viewContent.innerHTML = "";
  (post.content || "").split("\n").forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    viewContent.appendChild(p);
  });

  showScreen("view");
}

//преобразуем дату в удобный формат
function format(iso) {
  return new Date(iso).toLocaleString("ru-RU");
}

//переход к редактированию
const postEditButton = document.querySelector("#btn-edit-post");
if (postEditButton) {
  postEditButton.addEventListener("click", () => {
    if (currentPostId) {
      startEditPost(currentPostId);
    }
  });
}

//удаление поста
const deleteButton = document.querySelector("#btn-delete-post");
if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    if (!currentPostId) return;

    deletePost(currentPostId);
    currentPostId = null;

    renderPostList();
    showScreen("list");
  });
}
