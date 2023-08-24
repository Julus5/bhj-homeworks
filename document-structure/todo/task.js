const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const taskInput = document.querySelector('.tasks__input');

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(taskInput.value.trim()){
        tasksList.insertAdjacentHTML("beforeEnd",
            `<div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`
        );
        taskInput.value = '';
    };
    deleteTask()
});

function deleteTask() {
    const taskRemove = Array.from(document.querySelectorAll(".task__remove"))
    for (let item of taskRemove) {
        item.addEventListener("click", (e) => {          
            e.preventDefault()
            let deleteElement = item.closest(".task")
            deleteElement.remove()
        })
    }   
};


