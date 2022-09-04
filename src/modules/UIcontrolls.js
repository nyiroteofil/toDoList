const closePopUp = (parent) => {
    let container = document.querySelector(`.${parent}`);
    container.classList.remove('show');
}

const projectCreateBtn = document.querySelector('#create-project');

projectCreateBtn.addEventListener('click', () => {closePopUp('project-form')})