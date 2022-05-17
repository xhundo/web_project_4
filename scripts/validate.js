const showInputError = (input, formEl, settings) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  console.log(input.validationMessage);
  errorSpan.textContent = input.validationMessage;
  input.classList.add(settings.inputErrorClass);
};

const hideInputError = (input, formEl, settings) => {
  const errorSpan = formEl.querySelector("#" + input.id + "-error");
  errorSpan.textContent = "";
  input.classList.remove(settings.inputErrorClass);
};

const checkInputValidity = (formEl, input, settings) => {
  console.log(input.validity.valid);
  if (input.validity.valid) {
    console.log("valid");
    hideInputError(input, formEl, settings);
  } else {
    showInputError(input, formEl, settings);
  }
};

const hasValidInputs = (inputList) =>
  inputList.every((input) => input.validity.valid === true);

const toggleButton = (inputList, button, settings) => {
  console.log("hasValid", hasValidInputs(inputList));
  if (hasValidInputs(inputList)) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = true;
    button.classList.add(settings.inactiveButtonClass);
  }
};

setEventListeners = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  const submitButton = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(formEl, input, settings);
      toggleButton(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formEl, settings);
  });
};

enableValidation({
  formSelector: ".modal__form, .modal-place__form",
  inputSelector: ".modal__input, .modal-place__input",
  submitButtonSelector: ".modal__submit, .modal-place__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error-text_visible",
});
