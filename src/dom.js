import { format } from "date-fns";


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





  // ADD PROJECT FUNCTION

  let myProject = [];

  class Project {
    constructor(title) {
      this.title = title;
    }
  }



  function addItemToProject() {
    let title = document.querySelector('input[name="projectTitle"]').value;
    let newProject = new Project(title);
    myProject.push(newProject);
    projectForm.style.display = "none";
  }



  const project1 = new Project("Grocery");
  myProject.push(project1);

  const project2 = new Project("Chores");
  myProject.push(project2);

  const project3 = new Project("Prepare for trip")
  myProject.push(project3)


  const projectItemsDiv = document.createElement("div");
  projectItemsDiv.classList.add("project-items");
  navDiv.appendChild(projectItemsDiv);

  function renderProjects() {
    // Get the projectItemsDiv from the DOM
    const projectItemsDiv = document.querySelector(".project-items");
    
    // Clear the existing project items from the projectItemsDiv otherwise it adds the previous entry
    projectItemsDiv.innerHTML = "";

  // Append a new div for each project
  for (let i = 0; i < myProject.length; i++) {
    let project = myProject[i];
    let newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("projectText");
    newProjectDiv.textContent = project.title;
    projectItemsDiv.appendChild(newProjectDiv);
  }
}



  // Submit button
  projectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addItemToProject();
    renderProjects();
    projectForm.reset();
  });


  renderProjects();




  


// Add Task Function 
const taskDiv = document.createElement("div");
taskDiv.classList.add("taskDiv");

let myTask = [];

class Task {
  constructor (title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}



// Example Tasks
  const task1 = new Task("Task 1", "Task 1 Description", "2023-07-01", "Low"  );
  myTask.push(task1);

  const task2 = new Task("Task 2", "Task 2 Description", "2023-07-01", "Medium"  );
  myTask.push(task2)

  const task3 = new Task("Task 3", "Task 3 Description", "2023-07-15", "High"  );
  myTask.push(task3)





function addItemsToTask() {
  let title = document.querySelector('input[name="taskTitle"]').value;
  let description = document.querySelector('textarea[name="taskDescription"]').value;
  let date = document.querySelector('input[name="taskDate"]').value;
  let priority = document.querySelector('select[name="taskPriority"]').value;
  let newTask = new Task(title, description, date, priority);
  myTask.push(newTask);
}


const taskItemsDiv = document.createElement("div");
taskItemsDiv.classList.add("task-items");
taskDiv.appendChild(taskItemsDiv);



// Render Tasks
function renderTasks() {
  taskItemsDiv.innerHTML = ''; // Clear the existing tasks

  for (let i = 0; i < myTask.length; i++) {
    let task = myTask[i];
    let taskItemDiv = document.createElement("div");
    taskItemDiv.classList.add("task-item"); 
    

    // Set the color based on the priority level
    let color;
    if (task.priority === "Low") {
      color = "#d1eaee";
    } else if (task.priority === "Medium") {
      color = "#fedada";
    } else if (task.priority === "High") {
      color = "#EA5457";
    } else {
      color = "white"; 
    }

    taskItemDiv.style.backgroundColor = color;
    

    // Date format
    const formattedDate = format(new Date(task.date), "MMM do - yyyy");


    taskItemDiv.innerHTML = 
    ` <h1>${task.title}</h1>
      <h2>${task.description}</h2>
      <p>${formattedDate}</p>
      <p>${task.priority}</p>
      <button class="edit-button"><i class="fa-solid fa-pen-to-square fa-xl" style="color: #000000;"></i></button>
      <button class="remove-button"><i class="fa-solid fa-trash fa-lg" style="color: #000000;"></i></button>
    `;

     // Add event listeners for "edit" and "remove" buttons here
    const editButton = taskItemDiv.querySelector(".edit-button");
    const removeButton = taskItemDiv.querySelector(".remove-button");

    editButton.addEventListener("click", () => {
      editTask(i);
    });

    removeButton.addEventListener("click", () => {
      removeTask(i);
    });

    

    taskItemsDiv.appendChild(taskItemDiv); 
  }
}




// Submit button
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addItemsToTask();
  renderTasks();
  clearTaskForm();
});



// Clears form after Task is submitted
function clearTaskForm() {
  document.querySelector('input[name="taskTitle"]').value = "";
  document.querySelector('textarea[name="taskDescription"]').value = "";
  document.querySelector('input[name="taskDate"]').value = "";
  document.querySelector('select[name="taskPriority"]').value = "Low";
  taskForm.style.display = "none";
}


// Remove Button
function removeTask(index) {
  myTask.splice(index, 1);
  renderTasks(); // Re-render tasks to update the view
}


// Edit Button
function editTask(index) {
  const task = myTask[index];
  // Populate the form with the task details for editing
  document.querySelector('input[name="taskTitle"]').value = task.title;
  document.querySelector('textarea[name="taskDescription"]').value = task.description;
  document.querySelector('input[name="taskDate"]').value = task.date;
  document.querySelector('select[name="taskPriority"]').value = task.priority;

  // Show the form with the pre-filled data
  taskForm.style.display = "block";

  // Remove the original task from the myTask array
  myTask.splice(index, 1);
}




renderTasks();


  content.appendChild(mainContent);
  content.appendChild(taskDiv)
};

export default createUI;
