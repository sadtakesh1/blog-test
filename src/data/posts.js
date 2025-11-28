import { loadPosts, savePosts } from "./storage";

//получить все посты
export function getAllPosts() {
  return loadPosts();
}

//создание нового поста
export function createPost({ title, content }) {
  const posts = loadPosts();
  const now = new Date().toISOString();

  const newPost = {
    id: `post-${Date.now()}`,
    title,
    content,
    createdAt: now,
    updatedAt: now,
  };

  posts.push(newPost);
  savePosts(posts);
  return newPost;
}

//получить post по id
export function getPostById(id) {
  const posts = loadPosts();
  return posts.find((p) => p.id === id) || null;
}

//обновление поста
export function updatePost(id, { title, content }) {
  const posts = loadPosts();
  const post = posts.find((p) => p.id === id);
  if (!post) return null;

  post.title = title;
  post.content = content;
  post.updatedAt = new Date().toISOString();

  savePosts(posts);
  return post;
}

//удаление поста
export function deletePost(id) {
  const posts = loadPosts();
  const filtered = posts.filter((p) => p.id !== id);
  savePosts(filtered);
}
