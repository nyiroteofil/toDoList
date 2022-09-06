import {projects} from '../App.js';

function Project(name, description) {
    this.name = name;
    this.description = description;
}

Project.prototype.tasks = [];

Project.prototype.addTask = (name, date, priority) => {
    let newTask = new Task(name, date, priority)

    tasks.push(newTask);
};

function Task(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
}

const createProjectObj = (name, description) => {
    let project = new Project(name, description);

    projects.push(project);
};

export {
    createProjectObj,
}