const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render();


const form = document.querySelector("#new-task-form");
const validFormFieldInput = document.querySelector('#form-button');
const formValidateTaskName = document.querySelector('#form-validate-task-name');
const formValidateAssignedTo = document.querySelector('#form-validate-assigned-to');
const formValidateDescription = document.querySelector('#form-validate-description');
const formValidateDueDate = document.querySelector('#form-validate-due-date');
const formValidateStatus = document.querySelector('#form-validate-status');
// Adds the task name to the task list located on the left side of the web page. 
const taskListTwo = document.querySelector('#task-list-two');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const clearFields = () => {
        formValidateTaskName.value = "";
        formValidateDescription.value = "";
        formValidateAssignedTo.value = "";
        formValidateStatus.value = "In Progress";
        formValidateDueDate.value = "";
        formValidateTaskName.classList.remove("is-valid");
        formValidateDescription.classList.remove("is-valid");
        formValidateAssignedTo.classList.remove("is-valid");
        formValidateStatus.classList.remove("is-valid");
        formValidateDueDate.classList.remove("is-valid");
    };

    let validationFail = 0;

    let nameLength = formValidateTaskName.value.length;
    if (nameLength >= 5) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTaskName.classList.remove('is-invalid');
        taskListTwo.innerHTML += `<li class="list-group-item">${formValidateTaskName.value}</li>`;

    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
        validationFail++;
    }

    let nameLength1 = formValidateAssignedTo.value.length;
    if (nameLength1 >= 5) {
        formValidateAssignedTo.classList.add('is-valid');
        formValidateAssignedTo.classList.remove('is-invalid');
    } else {
        formValidateAssignedTo.classList.add('is-invalid');
        formValidateAssignedTo.classList.remove('is-valid');
        validationFail++;
    }

    let nameLength2 = formValidateDescription.value.length;
    if (nameLength2 >= 5) {
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');
    } else {
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
        validationFail++;
    }
    if (validationFail == 0) {

        //console.log(formValidateAssignedTo.value);

        taskManager.addTask(
            formValidateTaskName.value,
            formValidateDescription.value,
            formValidateAssignedTo.value,
            formValidateDueDate.value,
            formValidateStatus.value
        );

        //console.log(formValidateTaskName.value);
        //console.log(formValidateAssignedTo.value);
        //console.log(formValidateStatus.value);
        //console.log(formValidateDueDate.value);
        //console.log(formValidateDescription.value);
        clearFields();
        taskManager.render();

    }
});


//const taskHtml = createTaskHtml('take dog for walk', 'Andyyyy', '2', '2021-02-19', 'I need to take dog for walk');

//console.log(taskHtml);

// task 7
const taskListGroup = document.querySelector('#task-list-group');
console.log(taskListGroup);
taskListGroup.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        // console.log(event.target.parentElement.parentElement.parentElement.parentElement);

        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = "Done";
        taskManager.save();
        taskManager.render();

        let removeTheButton = document.querySelectorAll(".remove-the-button");
        for (let i = 0; i < removeTheButton.length; i++) {
            removeTheButton[i].addEventListener('click', () => {
                removeTheButton[i].parentElement.parentElement.remove();
            });


        }

    };


});