import "./post-form.css";
import { showScreen } from "../layout/layout";
import { getPostById, createPost, updatePost } from "../../data/posts";
import { renderPostList } from "../post-list/post-list";

const form = document.querySelector("#post-form");
const formTitle = document.querySelector("#form-title");
const postTitle = document.querySelector("#post-title");
const postContent = document.querySelector("#post-content");

let editingPostId = null;

//обработка отправки формы (создание/редактирование поста)
export function setupPostForm() {
  if (!form || !formTitle || !postTitle || !postContent) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = postTitle.value.trim();
    const content = postContent.value.trim();

    if (!title && !content) return;

    let savedPost;

    if (editingPostId === null) {
      savedPost = createPost({ title, content });
    } else {
      savedPost = updatePost(editingPostId, { title, content });
      editingPostId = null;
    }

    renderPostList();

    postTitle.value = "";
    postContent.value = "";
    formTitle.textContent = "Новый пост";

    showScreen("list");
  });
}
//создание нового поста
export function startCreatePost() {
  editingPostId = null;

  if (!formTitle || !postTitle || !postContent) return;

  formTitle.textContent = "Новый пост";
  postTitle.value = "";
  postContent.value = "";

  showScreen("edit");
}
//редактирование существующего поста
export function startEditPost(id) {
  const post = getPostById(id);
  if (!post) return;

  editingPostId = id;

  if (!formTitle || !postTitle || !postContent) return;

  formTitle.textContent = "Редактирование поста";
  postTitle.value = post.title;
  postContent.value = post.content;

  showScreen("edit");
}
