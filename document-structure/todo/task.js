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

        let task = document.querySelector(".task");
        let taskRemove = task.querySelector(".task__remove");
        taskRemove.addEventListener("click", () => {
            task.remove()
        });
    };

   
});