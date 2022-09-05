const Project = (name, description) => {
    this.name = name;
    this.description = description;

    function addTask(name, date, priority) {
        let newTask = new Task(name, date, priority)

        tasks.push(newTask);
    };

    let tasks = [];
}

const Task = (name, date, priority) => {
    this.name = name;
    this.date = date;
    this.priority = priority;
}

const createProjectObj = (name, description) => {
    let project = new Project(name, description);
};

export {
    createProjectObj,
}