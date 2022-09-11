import {projects} from '../App.js';

function Project(name, description) {
    this.name = name;
    this.description = description;
    this.tasks = [];
    this.addTask = (name, date, priority) => {
        let newTask = new Task(name, date, priority)
    
        this.tasks.push(newTask);
    };
}

function Task(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
}

const createProjectObj = (name, description) => {
    let project = new Project(name, description);

    projects.push(project);
};


/**removes projects both from the array and the DOM */
const removeProject = (node, obj) => { 
    projects.splice(obj, 1);

    let parent = document.querySelector('.project-items');
    
    parent.removeChild(node);   
}

const removeTask = (proj, task, node) => {
    proj.tasks.splice(task, 1);

    document.querySelector('.tasks').removeChild(node);
}

export {
    createProjectObj,
    removeProject,
    removeTask,
}