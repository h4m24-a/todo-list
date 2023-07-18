import createTodoHomePage from "./todo";

const createTabs = () => {
  const container = document.querySelector("#container");

  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebarDiv");

  const navbarDiv = document.createElement("div");
  navbarDiv.classList.add("navbarDiv");


  // Sidebar
  

  container.appendChild(sidebarDiv);
};
export default createTabs;
