// Task 4. Task Form Inputs Validation
const validFormFieldInput = document.querySelector('#form-button');

const formValidateTaskName = document.querySelector('#form-validate-task-name');
const formValidateAssignedTo = document.querySelector('#form-validate-assigned-to');
const formValidateDescription = document.querySelector('#form-validate-description');



validFormFieldInput.addEventListener('click', () => {

  let nameLength = formValidateTaskName.value.length;
  if (nameLength >= 5) {
    formValidateTaskName.classList.add('is-valid');
    formValidateTaskName.classList.remove('is-invalid');
  } else {
    formValidateTaskName.classList.add('is-invalid');
    formValidateTaskName.classList.remove('is-valid');
  }

});

validFormFieldInput.addEventListener('click', () => {
  let nameLength = formValidateAssignedTo.value.length;
  if (nameLength >= 5) {
    formValidateAssignedTo.classList.add('is-valid');
    formValidateAssignedTo.classList.remove('is-invalid');
  } else {
    formValidateAssignedTo.classList.add('is-invalid');
    formValidateAssignedTo.classList.remove('is-valid');
  }

});

validFormFieldInput.addEventListener('click', () => {
  let nameLength = formValidateDescription.value.length;
  if (nameLength >= 5) {
    formValidateDescription.classList.add('is-valid');
    formValidateDescription.classList.remove('is-invalid');
  } else {
    formValidateDescription.classList.add('is-invalid');
    formValidateDescription.classList.remove('is-valid');
  }

});

