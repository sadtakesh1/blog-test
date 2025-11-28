const STORAGE_KEY = "posts";

//загрузка массива постов из localStorage
export function loadPosts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Ошибка парсинга постов из localStorage", error);
    return [];
  }
}

//сохрание массива постов в localStorage
export function savePosts(posts){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}