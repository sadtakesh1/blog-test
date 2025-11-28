import "./layout.css";

//переключение экранов по имени
export function showScreen(name) {
  const screenList = document.querySelector("#screen-list");
  const screenEdit = document.querySelector("#screen-edit");
  const screenView = document.querySelector("#screen-view");

  if (!screenList || !screenEdit || !screenView) return;
  //скрываем все экраны
  screenList.hidden = true;
  screenEdit.hidden = true;
  screenView.hidden = true;
  //показываем нужный
  if (name === "list") screenList.hidden = false;
  if (name === "edit") screenEdit.hidden = false;
  if (name === "view") screenView.hidden = false;
}
