const createUI = () => {
  const content = document.querySelector("#content");
  const navDiv = document.createElement("div");
  navDiv.classList.add("navDiv");

  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  // Tabs
  const taskText = document.createElement("div");
  const allTasks = document.createElement("div");
  const thisWeek = document.createElement("div");
  const upcoming = document.createElement("div");
  const projectText = document.createElement("div");
  const addProjectButton = document.createElement("div");

  taskText.setAttribute("id", "task-button");
  allTasks.setAttribute("id", "alltask-button");
  thisWeek.setAttribute("id", "thisweek-button");
  upcoming.setAttribute("id", "upcmoming-button");
  projectText.setAttribute("id", "project-button");
  addProjectButton.setAttribute("id", "addproject-button");

 
  // Setting classes
  allTasks.classList.add("navText");
  thisWeek.classList.add("navText");
  upcoming.classList.add("navText");
  addProjectButton.classList.add("navText");

  // Text of tabs
  taskText.textContent = "Task";
  allTasks.textContent = "All Tasks";
  thisWeek.textContent = "This Week";
  upcoming.textContent = "Upcoming";
  projectText.textContent = "Projects";
  addProjectButton.textContent = "+ Add Project";

  
  content.appendChild(navDiv);
  content.appendChild(navbar);
  navDiv.appendChild(taskText);
  navDiv.appendChild(allTasks);
  navDiv.appendChild(thisWeek);
  navDiv.appendChild(upcoming);
  navDiv.appendChild(projectText);
  navDiv.appendChild(addProjectButton);
  

  navbar.appendChild(taskText);
  navbar.appendChild(allTasks);
  navbar.appendChild(thisWeek);
  navbar.appendChild(upcoming);
  navbar.appendChild(projectText);
  navbar.appendChild(addProjectButton);

  // Create the main content div
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");


  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "+ Add Task";
  addTaskButton.classList.add("add-task-button");


  // ENTER TASK FORM

  const taskForm = document.createElement("form");
  taskForm.classList.add("task-form");
  taskForm.style.display = "none";

  const closeButton = document.createElement("span");
  closeButton.textContent = "×";
  closeButton.classList.add("close");
  closeButton.id = "closeModal";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "taskTitle";
  titleInput.placeholder = "Title";
  titleInput.required = true;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "taskDescription";
  descriptionInput.placeholder = "Description";
  descriptionInput.required = true;

  const datePicker = document.createElement("input");
  datePicker.type = "date";
  datePicker.name = "taskDate";
  datePicker.required = true;

  const priorityLevel = document.createElement("select");
  priorityLevel.name = "taskPriority";
  priorityLevel.required = true;

  const priorityOptions = ["Low", "Medium", "High"]; // Add priority options

  for (const option of priorityOptions) {
    const priorityOption = document.createElement("option");
    priorityOption.value = option;
    priorityOption.textContent = option;
    priorityLevel.appendChild(priorityOption);
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit Task";

  // Add form elements to the form
  taskForm.appendChild(closeButton);
  taskForm.appendChild(titleInput);
  taskForm.appendChild(descriptionInput);
  taskForm.appendChild(datePicker);
  taskForm.appendChild(priorityLevel);
  taskForm.appendChild(submitButton);

  // Append the button and form to the mainContent div
  mainContent.appendChild(addTaskButton);
  mainContent.appendChild(taskForm);

  // Toggle the form visibility on button click
  addTaskButton.addEventListener("click", () => {
    taskForm.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    taskForm.style.display = "none";
  });

  navDiv.appendChild(navbar);
  mainContent.appendChild(addTaskButton);


  // PROJECT FORM MODAL

const projectForm = document.createElement("form");
projectForm.classList.add("project-form");
projectForm.style.display = "none";

const projectCloseButton = document.createElement("span");
projectCloseButton.textContent = "×";
projectCloseButton.classList.add("close");
projectCloseButton.id = "closeProjectModal";

const projectTitleInput = document.createElement("input");
projectTitleInput.type = "text";
projectTitleInput.name = "projectTitle";
projectTitleInput.placeholder = "Project Title";
projectTitleInput.required = true;


const projectSubmitButton = document.createElement("button");
projectSubmitButton.type = "submit";
projectSubmitButton.textContent = "Add Project";

// Add form elements to the form
projectForm.appendChild(projectCloseButton);
projectForm.appendChild(projectTitleInput);
projectForm.appendChild(projectSubmitButton);

// Append the project form to the mainContent div
mainContent.appendChild(projectForm);

// Toggle the project form visibility on button click
addProjectButton.addEventListener("click", () => {
  projectForm.style.display = "block";
});

projectCloseButton.addEventListener("click", () => {
  projectForm.style.display = "none";
});



  content.appendChild(mainContent);
  

  


}
export default createUI;