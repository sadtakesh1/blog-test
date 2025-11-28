import "./post-list.css";
import { getAllPosts } from "../../data/posts";
import { openPostView } from "../post-view/post-view";

const postList = document.querySelector("#posts-list");

//рендер списка постов
export function renderPostList() {
  if (!postList) return;

  const posts = getAllPosts();

  postList.innerHTML = "";

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.classList.add("post-item");
    //id выбранного поста
    li.dataset.id = post.id;

    li.addEventListener("click", () => {
      openPostView(post.id);
    });

    const postTitle = document.createElement("strong");
    postTitle.textContent = post.title;

    const postDate = document.createElement("div");
    postDate.classList.add("post-date");
    postDate.textContent = new Date(post.createdAt).toLocaleString("ru-RU");

    li.appendChild(postTitle);
    li.appendChild(postDate);

    postList.appendChild(li);
  });
}
