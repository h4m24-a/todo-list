import createProjects from "./projects";
import createTasks from "./tasks";

const createUI = () => {
  const content = document.querySelector("#content");
  const navDiv = document.createElement("div");
  navDiv.classList.add("navDiv");

  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  // Tabs
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");
  const div6 = document.createElement("div");

  div1.setAttribute("id", "task-button");
  div5.setAttribute("id", "project-button");

 

  // Setting classes
  div2.classList.add("navText");
  div3.classList.add("navText");
  div4.classList.add("navText");
  div6.classList.add("navText");

  // Text of tabs
  div1.textContent = "Task";
  div2.textContent = "All Tasks";
  div3.textContent = "This Week";
  div4.textContent = "Upcoming";
  div5.textContent = "Projects";
  div6.textContent = "Add Project";

  
  navDiv.appendChild(div1);
  navDiv.appendChild(div2);
  navDiv.appendChild(div3);
  navDiv.appendChild(div4);
  navDiv.appendChild(div5);
  navDiv.appendChild(div6);
  content.appendChild(navDiv);

  navbar.appendChild(div1);
  navbar.appendChild(div2);
  navbar.appendChild(div3);
  navbar.appendChild(div4);
  navbar.appendChild(div5);
  navbar.appendChild(div6);
  
  content.appendChild(navbar);
  navDiv.appendChild(navbar);

//   div2.addEventListener("click", () => {
//     clearContent();
//     createTasks();
//   });

//   div3.addEventListener("click", () => {
//     clearContent();
//     createProjects();
//   });
  
// };

// function clearContent() {
//   const content = document.querySelector("#content");
//   const newDiv = document.querySelector(".page-content");
//   const homeDiv = document.querySelector(".homeDiv");

//   if (newDiv) {
//     content.removeChild(newDiv);
//   }
//   if (homeDiv) {
//     content.removeChild(homeDiv);
//   }
}
export default createUI;