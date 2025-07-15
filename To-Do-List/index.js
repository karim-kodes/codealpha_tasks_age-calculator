class AuraList {
  constructor() {
    this.tasks = this.loadTasks();
    this.currentTheme = this.loadTheme();

    this.initializeElements();
    this.bindEvents();
    this.initializeTheme();
    this.renderTasks();
    this.initializeLucideIcons();
  }

  // Initialize DOM elements
  initializeElements() {
    this.taskForm = document.getElementById("taskForm");
    this.taskNameInput = document.getElementById("taskName");
    this.taskTypeSelect = document.getElementById("taskType");
    this.startTimeInput = document.getElementById("startTime");
    this.endTimeInput = document.getElementById("endTime");
    this.submitBtn = document.getElementById("submitBtn");

    this.lightBtn = document.getElementById("lightBtn");
    this.darkBtn = document.getElementById("darkBtn");

    this.pendingTasksContainer = document.getElementById("pendingTasks");
    this.completedTasksContainer = document.getElementById("completedTasks");
    this.pendingCountSpan = document.getElementById("pendingCount");
    this.completedCountSpan = document.getElementById("completedCount");
    this.pendingEmpty = document.getElementById("pendingEmpty");
    this.completedEmpty = document.getElementById("completedEmpty");

    this.toast = document.getElementById("toast");
    this.toastIcon = document.getElementById("toastIcon");
    this.toastTitle = document.getElementById("toastTitle");
    this.toastDescription = document.getElementById("toastDescription");
  }

  // Bind event listeners
  bindEvents() {
    this.taskForm.addEventListener("submit", (e) => this.handleSubmit(e));
    this.lightBtn.addEventListener("click", () => this.setTheme("light"));
    this.darkBtn.addEventListener("click", () => this.setTheme("dark"));

    // Form validation
    [
      this.taskNameInput,
      this.taskTypeSelect,
      this.startTimeInput,
      this.endTimeInput,
    ].forEach((input) => {
      input.addEventListener("input", () => this.validateForm());
    });
  }

  // Initialize Lucide icons
  initializeLucideIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Load tasks from localStorage
  loadTasks() {
    try {
      const savedTasks = localStorage.getItem("auralist-tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return [];
    }
  }

  // Save tasks to localStorage
  saveTasks() {
    try {
      localStorage.setItem("auralist-tasks", JSON.stringify(this.tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }

  // Load theme from localStorage
  loadTheme() {
    const savedTheme = localStorage.getItem("auralist-theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  }

  // Initialize theme
  initializeTheme() {
    this.setTheme(this.currentTheme);
  }

  // Set theme
  setTheme(theme) {
    this.currentTheme = theme;
    document.body.className = theme;

    // Update button states
    this.lightBtn.classList.toggle("active", theme === "light");
    this.darkBtn.classList.toggle("active", theme === "dark");

    // Save theme preference
    localStorage.setItem("auralist-theme", theme);
  }

  // Validate form
  validateForm() {
    const isValid =
      this.taskNameInput.value.trim() &&
      this.taskTypeSelect.value &&
      this.startTimeInput.value &&
      this.endTimeInput.value;

    this.submitBtn.disabled = !isValid;
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    const taskData = {
      name: this.taskNameInput.value.trim(),
      type: this.taskTypeSelect.value,
      startTime: this.startTimeInput.value,
      endTime: this.endTimeInput.value,
    };

    if (
      !taskData.name ||
      !taskData.type ||
      !taskData.startTime ||
      !taskData.endTime
    ) {
      return;
    }

    this.addTask(taskData);
    this.resetForm();
  }

  // Add new task
  addTask(taskData) {
    const newTask = {
      ...taskData,
      id: Date.now().toString(),
      completed: false,
    };

    this.tasks.unshift(newTask);
    this.saveTasks();
    this.renderTasks();

    this.showToast(
      "Task Added!",
      `"${taskData.name}" has been added to your list.`,
      "✅"
    );
  }

  // Reset form
  resetForm() {
    this.taskForm.reset();
    this.validateForm();
  }

  // Toggle task completion
  toggleComplete(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) return;

    const task = this.tasks[taskIndex];
    task.completed = !task.completed;

    this.saveTasks();
    this.renderTasks();

    const message = task.completed ? "Task Completed!" : "Task Reopened";
    const description = `"${task.name}" has been ${
      task.completed ? "marked as complete" : "reopened"
    }.`;
    const icon = task.completed ? "✅" : "🔄";

    this.showToast(message, description, icon);
  }

  // Delete task
  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) return;

    const task = this.tasks[taskIndex];
    this.tasks.splice(taskIndex, 1);

    this.saveTasks();
    this.renderTasks();

    this.showToast(
      "Task Deleted",
      `"${task.name}" has been removed from your list.`,
      "🗑️"
    );
  }

  // Create task card HTML
  createTaskCard(task) {
    const taskTypeConfig = {
      work: "Work",
      personal: "Personal",
      study: "Study",
      exercise: "Exercise",
    };

    return `
            <div class="task-card ${task.completed ? "completed" : ""}">
                <div class="task-header">
                    <div class="task-info">
                        <h3 class="task-name ${
                          task.completed ? "completed" : ""
                        }">${task.name}</h3>
                        <span class="task-badge ${task.type}">${
      taskTypeConfig[task.type]
    }</span>
                    </div>
                </div>
                
                <div class="task-time">
                    <i data-lucide="clock"></i>
                    <span>${task.startTime} - ${task.endTime}</span>
                </div>
                
                <div class="task-actions">
                    <button class="task-btn complete-btn ${
                      task.completed ? "completed" : ""
                    }" 
                            onclick="app.toggleComplete('${task.id}')">
                        <i data-lucide="check"></i>
                        <span>${
                          task.completed ? "Completed" : "Complete"
                        }</span>
                    </button>
                    <button class="task-btn delete-btn" onclick="app.deleteTask('${
                      task.id
                    }')">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `;
  }

  // Render tasks
  renderTasks() {
    const pendingTasks = this.tasks.filter((task) => !task.completed);
    const completedTasks = this.tasks.filter((task) => task.completed);

    // Update counters
    this.pendingCountSpan.textContent = `(${pendingTasks.length})`;
    this.completedCountSpan.textContent = `(${completedTasks.length})`;

    // Render pending tasks
    if (pendingTasks.length === 0) {
      this.pendingEmpty.classList.remove("hidden");
      this.pendingTasksContainer.innerHTML = this.pendingEmpty.outerHTML;
    } else {
      this.pendingEmpty.classList.add("hidden");
      this.pendingTasksContainer.innerHTML = pendingTasks
        .map((task) => this.createTaskCard(task))
        .join("");
    }

    // Render completed tasks
    if (completedTasks.length === 0) {
      this.completedEmpty.classList.remove("hidden");
      this.completedTasksContainer.innerHTML = this.completedEmpty.outerHTML;
    } else {
      this.completedEmpty.classList.add("hidden");
      this.completedTasksContainer.innerHTML = completedTasks
        .map((task) => this.createTaskCard(task))
        .join("");
    }

    // Reinitialize Lucide icons for new elements
    setTimeout(() => this.initializeLucideIcons(), 0);
  }

  // Show toast notification
  showToast(title, description, icon) {
    this.toastIcon.textContent = icon;
    this.toastTitle.textContent = title;
    this.toastDescription.textContent = description;

    this.toast.classList.add("show");

    // Auto hide after 3 seconds
    setTimeout(() => {
      this.toast.classList.remove("show");
    }, 3000);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.app = new AuraList();
});

// Handle system theme changes
if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("auralist-theme")) {
        window.app.setTheme(e.matches ? "dark" : "light");
      }
    });
}
