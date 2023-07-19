import createTodoHomePage from "./task";

const createTabs = () => {
  const container = document.querySelector("#container");

  // Create the sidebar
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebarDiv");

  // Create the navbar
  const navbarDiv = document.createElement("div");
  navbarDiv.classList.add("navbarDiv");

  const nav = document.createElement("ul");
  nav.classList.add("nav");

  // Create the "Tasks" item
  const tasksItem = document.createElement("p");
  tasksItem.textContent = "Tasks";
  // tasksItem.classList.add("task-nav")


  // Create sub-items for "Tasks"
  const allTasksItem = document.createElement("li");
  allTasksItem.textContent = "All Tasks";

  const todayTasksItem = document.createElement("li"); 
  todayTasksItem.textContent = "Today";
  
  const upcomingTasksItem = document.createElement("li");
  upcomingTasksItem.textContent = "Upcoming";


  // Append the sub-items to the "Tasks" item
  tasksItem.appendChild(allTasksItem);
  tasksItem.appendChild(upcomingTasksItem);
  tasksItem.appendChild(todayTasksItem); 

  // Create the "Projects" item
  const projectsItem = document.createElement("p");
  projectsItem.textContent = "Projects";
  // projectsItem.classList.add("project-nav")

  // Create sub-items for "Projects"
  const project1Item = document.createElement("li");
  project1Item.textContent = "Project 1";

  const project2Item = document.createElement("li");
  project2Item.textContent = "Project 2";

  // Append the sub-items to the "Projects" item
  projectsItem.appendChild(project1Item);
  projectsItem.appendChild(project2Item);

  // Append the "Tasks" and "Projects" items to the navbar
  nav.appendChild(tasksItem);
  nav.appendChild(projectsItem);

  // Append the navbar to the navbarDiv
  navbarDiv.appendChild(nav);

  // Append the navbarDiv to the sidebar
  sidebarDiv.appendChild(navbarDiv);

  // Create the content div on the right
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("contentDiv");

  // Append the content div to the container
  container.appendChild(sidebarDiv);
  container.appendChild(contentDiv);
};


export default createTabs;
